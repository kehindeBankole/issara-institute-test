import React from "react";
import {
  fireEvent,
  render,
  waitForElement,
  screen,
} from "@testing-library/react";
import Home from "./Home";
import fetchMock from "fetch-mock";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Test App", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("load", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const loading = await screen.findByText("loading");
    expect(loading).toBeInTheDocument();
  });

  test(" success", async () => {
    const books = [
      {
        id: 139,
        translation_id: 140,
        name: "Center for Alliance of Labor and Human Rights (CENTRAL)",
        name_en: "Center for Alliance of Labor and Human Rights (CENTRAL)",
        description:
          "CENTRAL​​ ​empowers Cambodian working people to demand transparent and accountable governance for labor and human rights through legal aid and other appropriate means.",
        service_categories: [1, 2, 8, 9, 10],
        website: "https://www.central-cambodia.org",
        email: "info@central-cambodia.org",
        phone_numbers: ["+85593556603"],
        facebook: "https://www.facebook.com/CentralCambodiaOrg",
        viber: null,
        line: null,
        image:
          "https://golden-dreams-staging-public.s3.amazonaws.com/media/images/service-providers/300x300-CENTRAL_App_Logo_2in3gsF_fnsVaYJ_vhBwQ7w_2a0BN9F_hz5q3l_ZJGBPDJ.png",
        addresses: [
          {
            id: 2,
            country_id: 3,
            state_id: 12,
            city_id: 100,
            street: null,
            zip: "12351",
            contacts: [],
            language: null,
          },
        ],
        comments: [],
        comments_count: 0,
        rating_group_id: 6,
        rating_group_name: "Organizations: NGOs, CSOs, CBOs",
        rating_score: null,
        rating_count: 0,
        scores_for_each_criteria: [
          {
            rating_criteria_id: 23,
            score: 0,
            count: 0,
          },
          {
            rating_criteria_id: 24,
            score: 0,
            count: 0,
          },
          {
            rating_criteria_id: 25,
            score: 0,
            count: 0,
          },
          {
            rating_criteria_id: 26,
            score: 0,
            count: 0,
          },
          {
            rating_criteria_id: 27,
            score: 0,
            count: 0,
          },
          {
            rating_criteria_id: 28,
            score: 0,
            count: 0,
          },
        ],
        rating_score_count: 0,
      },
    ];
    fetchMock.mock(
      "https://staging.cms.golden-dreams.org/api/v1/service-providers?lang=en",
      {
        body: books,
        status: 200,
      }
    );

    // Render the App
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const title = await screen.findByText(
      "Center for Alliance of Labor and Human Rights (CENTRAL)"
    );
    const email = await screen.findByText("info@central-cambodia.org");
    const website = await screen.findByText("https://www.central-cambodia.org");
    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(website).toBeInTheDocument();
  });
  fetchMock.done();
});
