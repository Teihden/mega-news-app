import { http, delay, HttpResponse } from "msw";
import { PUBLIC_URLS } from "@shared/config/constants";
import type { INewsletterSignUpFormReq, INewsletterSignUpFormResp } from "@features/newsletterSignUpForm";
import { footerMock, type ICommentsResp } from "@widgets/footer";
import { type IUpdatePostResp, postCardMock } from "@entities/postCard";
import { type IPostsResp, postCardContainerMock } from "@entities/postCardContainer";

export const handlers = [
  http.post<never, INewsletterSignUpFormReq, INewsletterSignUpFormResp>(PUBLIC_URLS.forms.newsletter, async ({ request }) => {
    await delay(1000);
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
    await delay(1000);
    return HttpResponse.json(footerMock.commentsResp, { status: 200 });
  }),

  http.put<never, never, IUpdatePostResp>(`${PUBLIC_URLS.posts.updatePosts(1)}`, async () => {
    await delay(1000);
    return HttpResponse.json(postCardMock.updatePostResp, { status: 200 });
  }),

  http.get<never, never, IPostsResp>(`${PUBLIC_URLS.posts.all}`, async () => {
    await delay(1000);
    return HttpResponse.json(postCardContainerMock.mainPage, { status: 200 });
  }),

];
