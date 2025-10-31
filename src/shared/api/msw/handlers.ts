import { http, delay, HttpResponse } from "msw";
import { PUBLIC_URLS } from "@shared/config/constants";
import type { INewsletterFromReq } from "@features/NewsletterForm";

interface IResp {
  isSuccess?: boolean;
  message?: string;
}

export const handlers = [
  http.post<never, INewsletterFromReq, IResp>(PUBLIC_URLS.forms.newsletter, async ({ request }) => {
    await delay(1000);
    const formData = await request.formData();
    const email = formData.get("email");

    if (email === "test@test.com") {
      return HttpResponse.json({ isSuccess: true, message: "Subscribed successfully" }, { status: 200 });
    }

    if (email === "error@test.com") {
      return HttpResponse.json({ isSuccess: false, message: "Invalid email" }, { status: 400 });
    }

    return HttpResponse.json({ isSuccess: false, message: "An error has occurred" }, { status: 500 });
  }),
];
