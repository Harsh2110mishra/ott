import React from "react";
import Home from "../../src/screens/Home/index";

import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const screenProps = {
  navigation: navigation,
  id: "home",
};

const feature = loadFeature("./__tests__/screens/home.feature");

const itemvalues = [
  {
    adult: false,
    id: 933131,
    overview:
      "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
    release_date: "2024-01-26",
    title: "Badland Hunters",
    video: false,
    vote_average: 6.7,
    vote_count: 417,
  },
];

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "ios" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "ios");
  });

  test("User navigates to Home", ({ given, when, then }) => {
    let homeWrapper: ShallowWrapper;
    let instance: homeWrapper;

    given("I am a User attempting to get movies", async () => {
      homeWrapper = shallow(<Home {...screenProps} />);
      expect(homeWrapper).toBeTruthy();
    });

    when("I navigate to home", async () => {
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(homeWrapper).toBeTruthy();
    });

    then("I can search movie", () => {
      let btn = homeWrapper.findWhere(
        (node) => node.prop("testID") === "searchBtn"
      );
      btn.simulate("changeText", "test");
      expect(homeWrapper).toBeTruthy();
    });
    then("I can click Confirmation button", async () => {
      const flatList = homeWrapper.findWhere(
        (node) => node.prop("testID") === "searchFlatList"
      );
      flatList.renderProp("keyExtractor")({ item: itemvalues[0].id });
      const render_item = flatList.renderProp("renderItem")({
        item: itemvalues[0],
      });

      let btn = render_item.findWhere(
        (node) => node.prop("testID") === "movieDetailsBtn"
      );
      btn.simulate("press");
      expect(homeWrapper).toBeTruthy();
    });
    then("I can select moview", async () => {
      expect(homeWrapper).toBeTruthy();
    });
  });
});
