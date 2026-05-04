import type { IMediaCard } from "../config";
import * as S from "./styles";
import { isEmpty, isPlainObject } from "remeda";
import { Link } from "react-router";

/**
 * Displays media content with optional title and description text.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the root element.
 * @param props.imgProps - Image props for the media preview.
 * @param props.videoProps - Video props for the media preview.
 * @param props.title - Card title.
 * @param props.titleVariantLevel - Title style level.
 * @param props.text - Card description text.
 * @param props.textVariant - Text style variant.
 * @param props.textLineClamp - Maximum number of visible text lines.
 * @param props.isBtnOverlay - Whether the title button uses the overlay style.
 * @param props.rest - Additional props passed to the root element.
 * @returns Media card component.
 */
export const MediaCard: IMediaCard = (props) => {
  const {
    className,
    imgProps = {},
    videoProps = {},
    title = "",
    titleVariantLevel = 3,
    text = "",
    textVariant = "md",
    textLineClamp = 2,
    isBtnOverlay = true,
    ...rest
  } = props;

  return (
    <S.MediaCard
      className={className}
      {...rest}
    >
      {imgProps && isPlainObject(imgProps) && !isEmpty(imgProps) && (
        <S.Img {...imgProps} />
      )}
      {videoProps && isPlainObject(videoProps) && !isEmpty(videoProps) && (
        <S.Video {...videoProps} />
      )}
      <S.Wrapper>
        {title && (
          <S.Btn
            $isOverlay={isBtnOverlay}
            forwardedAs={Link}
            to={"/"}
            variant={"blank"}
            title={title}
            isInline={true}
            text={(
              <S.Title
                forwardedAs={"span"}
                variantLevel={titleVariantLevel}
                marginBlock={0}
              >
                {title}
              </S.Title>
            )}
          />
        )}
        {text && (
          <S.Text
            variant={textVariant}
            $lineClamp={textLineClamp}
          >
            {text}
          </S.Text>
        )}
      </S.Wrapper>
    </S.MediaCard>
  );
};

MediaCard.MediaCard = S.MediaCard;
MediaCard.Btn = S.Btn;
MediaCard.Img = S.Img;
MediaCard.Title = S.Title;
MediaCard.Text = S.Text;
MediaCard.Wrapper = S.Wrapper;
