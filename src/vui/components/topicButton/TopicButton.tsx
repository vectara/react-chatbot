import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTitle } from "../typography/Title";
import { useVuiContext } from "../context/Context";

type Props = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  title?: string;
  fullWidth?: boolean;
};

export const VuiTopicButton = ({ children, className, href, onClick, title, fullWidth, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames("vuiTopicButton", className, {
    "vuiTopicButton--fullWidth": fullWidth
  });

  const content = (
    <>
      {title && (
        <>
          <VuiTitle size="s">
            <p>
              <VuiTextColor color="primary">{title}</VuiTextColor>
            </p>
          </VuiTitle>

          {children && <VuiSpacer size="xxs" />}
        </>
      )}

      {children}
    </>
  );

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children: content,
      ...rest
    });
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};
