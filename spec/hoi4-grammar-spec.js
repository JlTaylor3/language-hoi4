'use babel';

import Hoi4Grammar from '../lib/hoi4-grammar';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Hoi4Grammar', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('hoi4-grammar');
  });

  describe('when the hoi4-grammar:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.hoi4-grammar')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'hoi4-grammar:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.hoi4-grammar')).toExist();

        let hoi4GrammarElement = workspaceElement.querySelector('.hoi4-grammar');
        expect(hoi4GrammarElement).toExist();

        let hoi4GrammarPanel = atom.workspace.panelForItem(hoi4GrammarElement);
        expect(hoi4GrammarPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'hoi4-grammar:toggle');
        expect(hoi4GrammarPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.hoi4-grammar')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'hoi4-grammar:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let hoi4GrammarElement = workspaceElement.querySelector('.hoi4-grammar');
        expect(hoi4GrammarElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'hoi4-grammar:toggle');
        expect(hoi4GrammarElement).not.toBeVisible();
      });
    });
  });
});
