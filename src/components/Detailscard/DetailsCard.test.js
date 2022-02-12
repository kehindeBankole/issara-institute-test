import { render } from "@testing-library/react";
import DetailsCard from "./DetailsCard";

let item = {
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
  rating_score_count: 0,
};

test("details card test", () => {
  render(<DetailsCard item={item} />);
  expect(item).toHaveProperty("name");
  expect(item).toHaveProperty("image");
  expect(item).toHaveProperty("email");
  expect(item).toHaveProperty("website");
  expect(item).toHaveProperty("rating_count");
  expect(item).toHaveProperty("rating_score");
});
