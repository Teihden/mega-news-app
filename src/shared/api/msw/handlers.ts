import { http, delay, HttpResponse } from "msw";
import { PUBLIC_URLS } from "@shared/config/constants";
import type { INewsletterFormReq, INewsletterFormResp } from "@features/NewsletterForm";
import type { ICommentsResp } from "@shared/types";
import { commentsResp } from "@shared/api";

export const handlers = [
  http.post<never, INewsletterFormReq, INewsletterFormResp>(PUBLIC_URLS.forms.newsletter, async ({ request }) => {
    await delay(1500);
    const formData = await request.formData();
    const email = formData.get("email");

    if (email === "test@test.com") {
      return HttpResponse.json({ status: 200, message: "MSW. Subscribed successfully" }, { status: 200 });
    }

    if (email === "error@test.com") {
      return HttpResponse.json({ status: 400, message: "MSW. Invalid email" }, { status: 400 });
    }

    return HttpResponse.json({ status: 500, message: "MSW. An error has occurred" }, { status: 500 });
  }),

  http.get<never, never, ICommentsResp>(`${PUBLIC_URLS.comments}`, async () => {
    await delay(1500);
    return HttpResponse.json(commentsResp, { status: 200 });
  }),
];
