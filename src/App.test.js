import App from "./App";
import { setup, findByTestAttribute, findByComponentName } from "./utils";
import Pagination from "./components/Pagination";

describe("App", () => {
  it("renders without error", () => {
    const wrapper = setup(App, { componentsCount: 1 });
    const appComponent = findByTestAttribute(wrapper, "app");
    expect(appComponent.length).toBe(1);
  });
  it("renders multiple Pagination components", () => {
    const wrapper = setup(App, { componentsCount: 3 });
    const paginationComponents = findByComponentName(wrapper, Pagination);
    expect(paginationComponents.length).toBe(3);
  });
  it("renders multiple Pagination components", () => {
    const wrapper = setup(App, { componentsCount: 31 });
    const paginationComponents = findByComponentName(wrapper, Pagination);
    expect(paginationComponents.length).toBe(31);
  });
});
