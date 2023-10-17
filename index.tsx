import { getContainerEl, setupHooks } from "@cypress/mount-utils";
const marko = require("marko"); // Use 'require' to import the module without type checking

let component: any;

function cleanup() {
  component.destroy();
}

interface MountingOptions {
  log?: boolean;
}

export function mount(
  componentPath: string,
  input: object,
  options: MountingOptions = {}
) {
  const root = getContainerEl();

  marko.load(componentPath).then((template: any) => {
    component = template.renderSync(input);
    component.appendTo(root);
  });

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);