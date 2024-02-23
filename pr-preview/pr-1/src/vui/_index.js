"use strict";
(() => {
  // vui/_index.scss
  var css = `body,
textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: baseline;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

a[href],
button,
[role=button] {
  cursor: pointer;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}

input {
  margin: 0;
  padding: 0;
}

input:disabled {
  opacity: 1; /* required on iOS */
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  margin: 0;
}

fieldset {
  min-inline-size: auto;
}

.vuiAccordionHeader {
  font-size: 14px;
  border-bottom: 1px solid #cbcdde;
  width: 100%;
  padding: 8px 0;
}
.vuiAccordionHeader:hover {
  text-decoration: underline;
  background-color: #f3f7fb;
}

.vuiAccordionHeader__title {
  text-align: left;
}

.vuiAppContent {
  width: 100%;
  max-width: 1200px;
}

.vuiAppContent--fullWidth {
  max-width: 100%;
}

.vuiAppContent--paddingNone {
  padding: 0;
}

.vuiAppContent--paddingXs {
  padding: 8px 10px;
}

.vuiAppContent--paddingS {
  padding: 12px 15px;
}

.vuiAppContent--paddingM {
  padding: 16px 20px;
}

.vuiAppContent--paddingL {
  padding: 24px 30px;
}

.vuiAppContent--paddingXl {
  padding: 32px 40px;
}

.vuiAppHeader {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 46px;
  background-color: #f3f7fb;
  padding: 8px 16px;
  z-index: 8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.vuiAppHeader__inner {
  flex-grow: 1;
}

.vuiAppLayout {
  display: flex;
  flex-direction: row;
  padding-top: 46px;
  height: 100vh;
}

.vuiAppLayout--full {
  padding-top: 0;
}

.vuiAppLayout__sideNav {
  border-right: 1px solid #cbcdde;
  flex-shrink: 0;
  overflow-y: auto;
}

.vuiAppLayout__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.vuiAppSideNav {
  width: 240px;
  overflow-x: hidden;
  transition: all 0.2s;
  line-height: 1;
}

.vuiAppSideNav__inner {
  width: 240px;
  padding: 28px 32px 32px 33px;
  margin-bottom: 160px;
  transition: all 0.2s;
}

.vuiAppSideNavContent {
  opacity: 1;
  transition: all 0.2s;
}

.vuiAppSideNavContent-isHidden {
  pointer-events: none;
  opacity: 0;
}

.vuiAppSideNav-isCollapsed {
  width: 60px;
  height: 100%;
  overflow-y: hidden;
}
.vuiAppSideNav-isCollapsed .vuiAppSideNav__inner {
  padding-left: 16px;
}

.vuiAppSideNavCollapseButton {
  display: block;
  color: #69707d;
  font-size: 14px;
  text-decoration: none;
  padding: 0 16px;
  margin-left: -40px;
  margin-bottom: 16px;
}
.vuiAppSideNavCollapseButton:hover {
  color: rgb(38, 76, 214);
  text-decoration: underline;
}

.vuiAppSideNavExpandButton {
  margin-top: -4px;
  margin-bottom: 6px;
}

.vuiAppSideNavLink {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #2c313a;
  font-size: 14px;
  padding: 0 16px;
  margin-left: -16px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-decoration: none;
}
.vuiAppSideNavLink * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiAppSideNavLink:hover {
  color: rgb(38, 76, 214);
  text-decoration: underline;
}

.vuiAppSideNavLink--active {
  background-color: rgb(217, 226, 255);
  border-radius: 16px;
}

.vuiAppSideNavSections {
  margin-top: 24px;
}

.vuiAppSideNavContent-isHidden .vuiAppSideNavSections {
  margin-top: 8px;
}

.vuiAppSideNavSection + .vuiAppSideNavSection {
  margin-top: 24px;
}

.vuiAppSideNavSection__title {
  color: #2c313a;
  font-weight: 600;
  font-size: 14px;
}

.vuiAppSideNavSection__items {
  margin-top: 12px;
}
.vuiAppSideNavSection__items > .vuiAppSideNavLink:first-child {
  margin-top: -6px;
}
.vuiAppSideNavSection__items > .vuiAppSideNavLink:last-child {
  margin-bottom: -6px;
}

.vuiAppSideNavTree {
  margin-top: -4px;
}

.vuiAppSideNavTreeSection {
  position: relative;
}

.vuiAppSideNavTreeToggleButton {
  position: absolute;
  top: 0;
  right: -30px;
}

.vuiAppSideNavTreeChildren {
  margin-left: 20px;
}

.vuiAppSideNavTreeSection__subTitle {
  display: block;
  color: #2c313a;
  font-size: 14px;
  padding: 0 16px;
  margin-left: -16px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #69707d;
}

.vuiAccountMenu {
  min-width: 260px;
}

.vuiAccounrMenuHeader {
  padding: 12px;
  border-bottom: 1px solid #e3e4f3;
  background-color: #f3f7fb;
}

.vuiAccountMenuHeaderItem__title {
  font-size: 12px;
  font-weight: 600;
  color: #2c313a;
}

.vuiAccountMenuHeaderItem__value {
  font-size: 14px;
  color: #2c313a;
  margin-top: 4px;
}

.vuiBadge {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 12px;
  font-family: inherit;
  white-space: nowrap;
  text-decoration: none;
}

.vuiBadge--clickable {
  cursor: pointer;
}

.vuiBadge--accent {
  color: #551edf !important;
  background-color: rgba(85, 30, 223, 0.1);
  border: 1px solid rgba(85, 30, 223, 0.1);
  transition: all 0.2s;
}
.vuiBadge--accent.vuiBadge--clickable:hover {
  border-color: #551edf;
  text-decoration: none;
}

.vuiBadge--primary {
  color: rgb(38, 76, 214) !important;
  background-color: rgba(38, 76, 214, 0.1);
  border: 1px solid rgba(38, 76, 214, 0.1);
  transition: all 0.2s;
}
.vuiBadge--primary.vuiBadge--clickable:hover {
  border-color: rgb(38, 76, 214);
  text-decoration: none;
}

.vuiBadge--success {
  color: #04821f !important;
  background-color: rgba(4, 130, 31, 0.1);
  border: 1px solid rgba(4, 130, 31, 0.1);
  transition: all 0.2s;
}
.vuiBadge--success.vuiBadge--clickable:hover {
  border-color: #04821f;
  text-decoration: none;
}

.vuiBadge--warning {
  color: #965a15 !important;
  background-color: rgba(150, 90, 21, 0.1);
  border: 1px solid rgba(150, 90, 21, 0.1);
  transition: all 0.2s;
}
.vuiBadge--warning.vuiBadge--clickable:hover {
  border-color: #965a15;
  text-decoration: none;
}

.vuiBadge--danger {
  color: #c41535 !important;
  background-color: rgba(196, 21, 53, 0.1);
  border: 1px solid rgba(196, 21, 53, 0.1);
  transition: all 0.2s;
}
.vuiBadge--danger.vuiBadge--clickable:hover {
  border-color: #c41535;
  text-decoration: none;
}

.vuiBadge--neutral {
  color: #2c313a !important;
  background-color: #f3f7fb;
  border: 1px solid rgba(44, 49, 58, 0.1);
  transition: all 0.2s;
}
.vuiBadge--neutral.vuiBadge--clickable:hover {
  border-color: #2c313a;
  text-decoration: none;
}

.vuiBaseButtonIconContainer {
  line-height: 0;
}

.vuiBaseButtonLinkWrapper {
  text-decoration: none;
}
.vuiBaseButtonLinkWrapper:hover {
  text-decoration: none;
}

.vuiBaseButton {
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  line-height: 1;
  cursor: pointer;
}

.vuiBaseButton-isInert,
.vuiBaseButton-isDisabled {
  cursor: default;
  pointer-events: none;
}

.vuiBaseButton-isDisabled {
  opacity: 0.5;
}

.vuiBaseButton--left .vuiBaseButtonIconContainer {
  margin-right: 8px;
}

.vuiBaseButton--right {
  flex-direction: row-reverse;
}
.vuiBaseButton--right .vuiBaseButtonIconContainer {
  margin-left: 8px;
  margin-right: 0;
}

.vuiBaseButton--fullWidth {
  width: 100%;
}

.vuiBaseButton--xs {
  font-size: 14px;
  padding: 4px 8px;
  height: 24px;
}

.vuiBaseButton--s {
  font-size: 14px;
  padding: 6px 8px;
  height: 28px;
}

.vuiBaseButton--m {
  font-size: 16px;
  padding: 8px 16px;
  height: 34px;
}

.vuiButtonPrimary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonPrimary--accent {
  color: #ffffff;
  background-color: #551edf;
  border: 1px solid #551edf;
}
.vuiButtonPrimary--accent.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--primary {
  color: #ffffff;
  background-color: rgb(38, 76, 214);
  border: 1px solid rgb(38, 76, 214);
}
.vuiButtonPrimary--primary.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--success {
  color: #ffffff;
  background-color: #04821f;
  border: 1px solid #04821f;
}
.vuiButtonPrimary--success.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--danger {
  color: #ffffff;
  background-color: #c41535;
  border: 1px solid #c41535;
}
.vuiButtonPrimary--danger.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--warning {
  color: #ffffff;
  background-color: #965a15;
  border: 1px solid #965a15;
}
.vuiButtonPrimary--warning.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--neutral {
  color: #2c313a;
  background-color: rgba(44, 49, 58, 0.1);
  border: 1px solid rgba(44, 49, 58, 0.1);
}
.vuiButtonPrimary--neutral.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--subdued {
  color: #69707d;
  background-color: rgba(105, 112, 125, 0.1);
  border: 1px solid rgba(105, 112, 125, 0.1);
}
.vuiButtonPrimary--subdued.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonSecondary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonSecondary--solid {
  background-color: #ffffff;
}

.vuiButtonSecondary--accent {
  border: 1px solid rgba(85, 30, 223, 0.5);
  color: #551edf;
}
.vuiButtonSecondary--accent.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--primary {
  border: 1px solid rgba(38, 76, 214, 0.5);
  color: rgb(38, 76, 214);
}
.vuiButtonSecondary--primary.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--success {
  border: 1px solid rgba(4, 130, 31, 0.5);
  color: #04821f;
}
.vuiButtonSecondary--success.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--danger {
  border: 1px solid rgba(196, 21, 53, 0.5);
  color: #c41535;
}
.vuiButtonSecondary--danger.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--warning {
  border: 1px solid rgba(150, 90, 21, 0.5);
  color: #965a15;
}
.vuiButtonSecondary--warning.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--neutral {
  border: 1px solid #cbcdde;
  color: #2c313a;
}
.vuiButtonSecondary--neutral.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--subdued {
  border: 1px solid #e3e4f3;
  color: #69707d;
}
.vuiButtonSecondary--subdued.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonTertiary {
  padding-left: 8px;
  padding-right: 8px;
}
.vuiButtonTertiary:hover {
  text-decoration: underline;
}

.vuiButtonTertiary-noPadding {
  padding: 0;
}

.vuiButtonTertiary--accent {
  color: #551edf;
}
.vuiButtonTertiary--accent.vuiButtonTertiary-isSelected {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiButtonTertiary--primary {
  color: rgb(38, 76, 214);
}
.vuiButtonTertiary--primary.vuiButtonTertiary-isSelected {
  background-color: rgba(38, 76, 214, 0.1);
}

.vuiButtonTertiary--success {
  color: #04821f;
}
.vuiButtonTertiary--success.vuiButtonTertiary-isSelected {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiButtonTertiary--danger {
  color: #c41535;
}
.vuiButtonTertiary--danger.vuiButtonTertiary-isSelected {
  background-color: rgba(196, 21, 53, 0.1);
}

.vuiButtonTertiary--warning {
  color: #965a15;
}
.vuiButtonTertiary--warning.vuiButtonTertiary-isSelected {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiButtonTertiary--neutral {
  color: #2c313a;
}
.vuiButtonTertiary--neutral.vuiButtonTertiary-isSelected {
  background-color: rgba(44, 49, 58, 0.1);
}

.vuiButtonTertiary--subdued {
  color: #69707d;
}
.vuiButtonTertiary--subdued.vuiButtonTertiary-isSelected {
  background-color: rgba(105, 112, 125, 0.1);
}

.vuiIconButton {
  display: inline-block;
  border-radius: 4px;
  padding: 4px;
  line-height: 1;
}

.vuiIconButton--accent {
  color: #551edf;
  background-color: rgba(85, 30, 223, 0);
  transition: all 0.2s;
}
.vuiIconButton--accent:hover {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiIconButton--primary {
  color: rgb(38, 76, 214);
  background-color: rgba(38, 76, 214, 0);
  transition: all 0.2s;
}
.vuiIconButton--primary:hover {
  background-color: rgba(38, 76, 214, 0.1);
}

.vuiIconButton--success {
  color: #04821f;
  background-color: rgba(4, 130, 31, 0);
  transition: all 0.2s;
}
.vuiIconButton--success:hover {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiIconButton--warning {
  color: #965a15;
  background-color: rgba(150, 90, 21, 0);
  transition: all 0.2s;
}
.vuiIconButton--warning:hover {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiIconButton--danger {
  color: #c41535;
  background-color: rgba(196, 21, 53, 0);
  transition: all 0.2s;
}
.vuiIconButton--danger:hover {
  background-color: rgba(196, 21, 53, 0.1);
}

.vuiIconButton--neutral {
  color: #2c313a;
  background-color: rgba(44, 49, 58, 0);
  transition: all 0.2s;
}
.vuiIconButton--neutral:hover {
  background-color: rgba(44, 49, 58, 0.1);
}

.vuiIconButton--subdued {
  color: #69707d;
  background-color: rgba(105, 112, 125, 0);
  transition: all 0.2s;
}
.vuiIconButton--subdued:hover {
  background-color: rgba(105, 112, 125, 0.1);
}

.vuiIconButton--xs {
  padding: 4px;
  height: 24px;
}

.vuiIconButton--s {
  padding: 6px;
  height: 28px;
}

.vuiIconButton--m {
  padding: 8px;
  height: 34px;
}

.vuiCallout {
  width: 100%;
}

.vuiCallout--m {
  padding: 16px;
}
.vuiCallout--m .vuiCallout__closeButton {
  margin: -8px;
}

.vuiCallout--s {
  padding: 12px;
}
.vuiCallout--s .vuiCallout__closeButton {
  margin: -6px;
}

.vuiCallout--accent {
  background-color: rgba(85, 30, 223, 0.1);
}

.vuiCallout--primary {
  background-color: rgb(217, 226, 255);
}

.vuiCallout--success {
  background-color: rgba(4, 130, 31, 0.1);
}

.vuiCallout--warning {
  background-color: rgba(150, 90, 21, 0.1);
}

.vuiCallout--danger {
  background-color: #fae9eb;
}

.vuiCallout--neutral {
  background-color: #f3f7fb;
}

.vuiCard {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}

.vuiCard--interactive:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
}

.vuiCard--center {
  align-items: center;
  text-align: center;
}
.vuiCard--center .vuiCard__content,
.vuiCard--center .vuiCard__footer {
  align-items: center;
  text-align: center;
}

.vuiCard--left {
  align-items: flex-start;
  text-align: left;
}
.vuiCard--left .vuiCard__content,
.vuiCard--left .vuiCard__footer {
  align-items: flex-start;
  text-align: left;
}

.vuiCard__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px;
}

.vuiCard__footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #e3e4f3;
  padding: 16px 24px;
}

.vuiCard--s .vuiCard__content,
.vuiCard--s .vuiCard__footer {
  padding: 16px 24px;
}

.vuiCard--m .vuiCard__content,
.vuiCard--m .vuiCard__footer {
  padding: 24px 32px;
}

.vuiCard--l .vuiCard__content,
.vuiCard--l .vuiCard__footer {
  padding: 32px 40px;
}

.vuiChatTurn {
  position: relative;
  left: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #ffffff;
  padding: 24px 12px 24px 24px;
  margin-right: 4px;
  transition: all 0.2s;
}
.vuiChatTurn:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
  left: 4px;
}

.vuiChatTurn + .vuiChatTurn {
  margin-top: 1px;
}

.vuiChatQuestion {
  color: #551edf;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
}

.vuiChatQuestion--error {
  color: #c41535;
}

.vuiChat__inspectButton {
  margin-top: -4px;
}

.vuiChatAnswer {
  color: #000;
}

.vuiChatButton,
.vuiChat {
  position: fixed;
  right: 4px;
  bottom: 4px;
  z-index: 9;
}

.vuiChatButton-isHidden,
.vuiChat--closed {
  visibility: hidden;
  opacity: 0;
}

.vuiChatButton {
  padding: 8px 12px;
  font-size: 14px;
  color: #2c313a;
  background-color: rgb(217, 226, 255);
  border: 1px solid #cbcdde;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s;
  animation: popUp 0.4s cubic-bezier(0.5, 0, 0.5, 1) 1;
}
.vuiChatButton:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  translate: translateY(-20px);
}

@keyframes popUp {
  0% {
    transform: translateY(40px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.vuiChat {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #cbcdde;
  background-color: #f3f7fb;
}
@media screen and (max-height: 600px) {
  .vuiChat {
    bottom: 4px;
    height: calc(100vh - 2 * 4px);
  }
  .vuiChat .vuiChat__conversation {
    max-height: 100%;
  }
}
@media screen and (max-width: 600px) {
  .vuiChat {
    right: 4px;
    width: calc(100vw - 2 * 4px);
    max-width: 100% !important;
  }
}

.vuiChat--tall {
  bottom: 4px;
  height: calc(100vh - 2 * 4px);
}
.vuiChat--tall .vuiChat__conversation {
  max-height: 100%;
}

.vuiChat--fullScreen {
  height: calc(100vh - 2 * 4px);
  width: calc(100vw - 2 * 4px);
  max-width: 100% !important;
}
.vuiChat--fullScreen .vuiChat__conversation {
  max-height: 100%;
}

.vuiChat__header {
  padding: 8px 12px;
  font-size: 14px;
  color: #2c313a;
  background-color: rgb(217, 226, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 2;
}

.vuiChat__conversation {
  flex-grow: 1;
  max-height: 400px;
  overflow-y: auto;
}

.vuiChat__introduction {
  padding: 16px 24px 0;
  font-size: 14px;
  color: #000;
}

.vuiChat__turns {
  font-size: 14px;
}

.vuiChat__conversationActions {
  padding: 12px;
}

.vuiChat__input {
  border-top: 1px solid #e3e4f3;
  padding: 8px 12px;
}

.vuiChatPanel {
  position: absolute;
  z-index: 5;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  padding: 4px 12px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.vuiCodeContainer {
  position: relative;
  border-left: 4px solid #cbcdde;
  max-height: 480px;
}

.vuiCodeContainer--fullHeight {
  max-height: 100%;
}

.vuiCodeCopyButton {
  position: absolute;
  right: 4px;
  top: 4px;
}

.vuiCodePre {
  padding: 0 !important;
  margin: 0 !important;
  max-height: inherit;
}

.vuiCode {
  display: block;
  width: 100%;
  padding: 16px 24px;
  background-color: #f3f7fb;
  color: #2c313a;
  font-family: "Roboto Mono", monospace;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 12px !important;
}

@keyframes drawerIn {
  0% {
    right: -680px;
  }
  100% {
    right: 0;
  }
}
.vuiDrawer {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 680px;
  background-color: #ffffff;
  border-left: 1px solid #cbcdde;
  z-index: 11;
  animation: drawerIn 0.2s cubic-bezier(0, 1, 0, 1);
}

.vuiDrawerHeader {
  padding: 24px 24px;
}

.vuiDrawerContent {
  overflow-y: auto;
  overscroll-behavior: contain;
}

.vuiDrawerContent__inner {
  padding: 24px 24px;
}

.vuiDrawer--primary .vuiDrawerHeader {
  background-color: rgb(217, 226, 255);
  color: #2c313a;
}

.vuiDrawer--danger .vuiDrawerHeader {
  background-color: #fae9eb;
  color: #c41535;
}

.vuiFlexContainer {
  display: flex;
  align-items: stretch;
}

.vuiFlexContainer--fullWidth {
  width: 100%;
}

.vuiFlexContainer--wrap {
  flex-wrap: wrap;
}

.vuiFlexContainer--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexContainer--alignItemsCenter {
  align-items: center;
}

.vuiFlexContainer--alignItemsEnd {
  align-items: end;
}

.vuiFlexContainer--alignItemsStart {
  align-items: start;
}

.vuiFlexContainer--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexContainer--directionColumn {
  flex-direction: column;
}

.vuiFlexContainer--directionColumnReverse {
  flex-direction: column-reverse;
}

.vuiFlexContainer--directionRow {
  flex-direction: row;
}

.vuiFlexContainer--directionRowReverse {
  flex-direction: row-reverse;
}

.vuiFlexContainer--justifyContentCenter {
  justify-content: center;
}

.vuiFlexContainer--justifyContentEnd {
  justify-content: end;
}

.vuiFlexContainer--justifyContentStart {
  justify-content: start;
}

.vuiFlexContainer--justifyContentSpaceAround {
  justify-content: space-around;
}

.vuiFlexContainer--justifyContentSpaceBetween {
  justify-content: space-between;
}

.vuiFlexContainer--justifyContentSpaceEvenly {
  justify-content: space-evenly;
}

.vuiFlexContainer--spacingNone {
  margin: 0;
}
.vuiFlexContainer--spacingNone > .vuiFlexItem {
  margin: 0;
}

.vuiFlexContainer--spacingXxs {
  margin: -2px;
}
.vuiFlexContainer--spacingXxs > .vuiFlexItem {
  margin: 2px;
}

.vuiFlexContainer--spacingXs {
  margin: -4px;
}
.vuiFlexContainer--spacingXs > .vuiFlexItem {
  margin: 4px;
}

.vuiFlexContainer--spacingS {
  margin: -6px;
}
.vuiFlexContainer--spacingS > .vuiFlexItem {
  margin: 6px;
}

.vuiFlexContainer--spacingM {
  margin: -8px;
}
.vuiFlexContainer--spacingM > .vuiFlexItem {
  margin: 8px;
}

.vuiFlexContainer--spacingL {
  margin: -12px;
}
.vuiFlexContainer--spacingL > .vuiFlexItem {
  margin: 12px;
}

.vuiFlexContainer--spacingXl {
  margin: -16px;
}
.vuiFlexContainer--spacingXl > .vuiFlexItem {
  margin: 16px;
}

.vuiFlexContainer--spacingXxl {
  margin: -20px;
}
.vuiFlexContainer--spacingXxl > .vuiFlexItem {
  margin: 20px;
}

.vuiFlexItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vuiFlexItem--truncate {
  min-width: 40px;
}

.vuiFlexItem--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexItem--alignItemsCenter {
  align-items: center;
}

.vuiFlexItem--alignItemsEnd {
  align-items: end;
}

.vuiFlexItem--alignItemsStart {
  align-items: start;
}

.vuiFlexItem--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexItem--flexGrow0 {
  flex-grow: 0;
}

.vuiFlexItem--flexGrow1 {
  flex-grow: 1;
}

.vuiFlexItem--flexGrow2 {
  flex-grow: 2;
}

.vuiFlexItem--flexGrow3 {
  flex-grow: 3;
}

.vuiFlexItem--flexGrow4 {
  flex-grow: 4;
}

.vuiFlexItem--flexGrow5 {
  flex-grow: 5;
}

.vuiFlexItem--flexGrow6 {
  flex-grow: 6;
}

.vuiFlexItem--flexGrow7 {
  flex-grow: 7;
}

.vuiFlexItem--flexGrow8 {
  flex-grow: 8;
}

.vuiFlexItem--flexGrow9 {
  flex-grow: 9;
}

.vuiFlexItem--flexGrow10 {
  flex-grow: 10;
}

.vuiFlexItem--flexGrowNone {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiFlexItem--flexShrink0 {
  flex-shrink: 0;
}

.vuiFlexItem--flexShrink1 {
  flex-shrink: 1;
}

.vuiFlexItem--flexShrink2 {
  flex-shrink: 2;
}

.vuiFlexItem--flexShrink3 {
  flex-shrink: 3;
}

.vuiFlexItem--flexShrink4 {
  flex-shrink: 4;
}

.vuiFlexItem--flexShrink5 {
  flex-shrink: 5;
}

.vuiFlexItem--flexShrink6 {
  flex-shrink: 6;
}

.vuiFlexItem--flexShrink7 {
  flex-shrink: 7;
}

.vuiFlexItem--flexShrink8 {
  flex-shrink: 8;
}

.vuiFlexItem--flexShrink9 {
  flex-shrink: 9;
}

.vuiFlexItem--flexShrink10 {
  flex-shrink: 10;
}

.vuiFlexItem--flexShrinkNone {
  flex-basis: auto;
  flex-shrink: 0;
}

.vuiFlexItem--auto {
  flex-basis: auto;
}

.vuiFlexItem--content {
  flex-basis: content;
}

.vuiFlexItem--fill {
  flex-basis: fill;
}

.vuiFlexItem--maxContent {
  flex-basis: max-content;
}

.vuiFlexItem--minContent {
  flex-basis: min-content;
}

.vuiFlexItem--none {
  flex-basis: 0;
}

.vuiCheckboxLabel {
  font-size: 14px;
}

.vuiInput {
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  background-color: #ffffff;
}

.vuiInput--m {
  padding: 8px 16px;
  font-size: 14px;
}

.vuiInput--l {
  padding: 12px 16px;
  font-size: 18px;
}

.vuiInput--fullWidth {
  width: 100%;
}

.vuiInput-isInvalid {
  border-color: #c41535;
}

.vuiLabel {
  font-size: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiRadioButtonLabel {
  font-size: 14px;
}

.vuiSelect {
  position: relative;
  max-width: 240px;
  width: 100%;
}
.vuiSelect select {
  background-color: #ffffff;
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  color: #000;
  width: 100%;
}

.vuiSelect__caret {
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: auto;
  right: 12px;
}

.vuiSelect--m select {
  padding: 8px 16px;
  font-size: 14px;
  padding-right: 32px;
}
.vuiSelect--m .vuiSelect__caret {
  top: calc(50% - 10px);
}

.vuiSelect--l select {
  padding: 12px 16px;
  font-size: 18px;
  padding-right: 48px;
}
.vuiSelect--l .vuiSelect__caret {
  top: calc(50% - 14px);
}

.vuiSelect-isInvalid select {
  border-color: #c41535;
}

.vuiSuperRadioGroup {
  display: grid;
  gap: 8px;
}

.vuiSuperRadioButton {
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  text-decoration-color: #2c313a;
  text-align: left;
  background-color: #f3f7fb;
}
.vuiSuperRadioButton:hover {
  text-decoration: underline;
  text-decoration-color: #2c313a;
  background-color: rgb(217, 226, 255);
}

.vuiTextArea {
  appearance: none;
  border-radius: 4px;
  border: 1px solid #cbcdde;
  max-width: 100%;
  resize: none;
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
}

.vuiTextArea--fullWidth {
  width: 100%;
}

.vuiHorizontalRule {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cbcdde;
  width: 100%;
}

.vuiIcon {
  line-height: 0;
}

.vuiIcon--inline {
  display: inline-block;
}

.vuiIcon--accent {
  color: #551edf !important;
}

.vuiIcon--primary {
  color: rgb(38, 76, 214) !important;
}

.vuiIcon--success {
  color: #04821f !important;
}

.vuiIcon--warning {
  color: #965a15 !important;
}

.vuiIcon--danger {
  color: #c41535 !important;
}

.vuiIcon--subdued {
  color: #69707d !important;
}

.vuiIcon--neutral {
  color: #2c313a !important;
}

.vuiIcon--empty {
  color: #ffffff !important;
}

.vuiInfoTable {
  width: 100%;
  table-layout: fixed;
  border: 1px solid #e3e4f3;
}
.vuiInfoTable thead {
  background-color: #f3f7fb;
  border-bottom: 1px solid #e3e4f3;
}
.vuiInfoTable tbody tr {
  border-bottom: 1px solid #e3e4f3;
}
.vuiInfoTable th {
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  text-align: left;
}
.vuiInfoTable td {
  font-size: 14px;
  vertical-align: middle;
}

.vuiInfoTable--paddingXxs td {
  padding: 4px 12px;
}

.vuiInfoTable--paddingXs td {
  padding: 8px 12px;
}

.vuiInfoTable--paddingS td {
  padding: 12px 12px;
}

.vuiInfoTableRow--sectionHeader {
  background-color: #f3f7fb;
  border-bottom: none !important;
}

.vuiInfoTableRow--footer {
  background-color: #f3f7fb;
}

.vuiLink {
  color: rgb(38, 76, 214) !important;
  text-decoration: none;
}
.vuiLink:hover {
  text-decoration: underline;
}

.vuiLink--button {
  display: inline;
}

.vuiListNumber {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: #f3f7fb;
  color: #69707d;
  font-weight: 600;
  line-height: 0;
  align-items: center;
}

.vuiListNumber--m {
  width: 16px;
  height: 16px;
  padding: 16px;
  font-size: 16px;
}

.vuiListNumber--s {
  width: 12px;
  height: 12px;
  padding: 12px;
  font-size: 12px;
}

.vuiListNumber-isComplete {
  background-color: #eadfff;
  color: #551edf;
}

.vuiMenu {
  border: 1px solid #cbcdde;
  border-radius: 8px;
}

.vuiMenuItem + .vuiMenuItem {
  border-top: 1px solid #cbcdde;
}

.vuiMenuItem {
  display: block;
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  text-decoration-color: #2c313a;
  text-align: left;
}
.vuiMenuItem:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  text-decoration: underline;
  text-decoration-color: #2c313a;
}

@keyframes modalIn {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.vuiModalContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: modalIn 0.2s cubic-bezier(0, 1, 1, 1);
  pointer-events: none;
}

.vuiModal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  max-height: calc(100vh - 200px);
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  z-index: 12;
  pointer-events: all;
}

.vuiModalHeader {
  padding: 16px;
}

.vuiModalContent {
  overflow-y: scroll;
  overscroll-behavior: contain;
}

.vuiModalContent__inner {
  padding: 24px 16px 40px;
}

.vuiModal--primary .vuiModalHeader {
  background-color: rgb(217, 226, 255);
  color: #2c313a;
}

.vuiModal--danger .vuiModalHeader {
  background-color: #fae9eb;
  color: #c41535;
}

.vuiNotificationList {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  animation: popTop 0.4s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

.vuiNotificationList__notifications {
  padding: 4px;
  border-bottom-left-radius: 16px;
  transition: all 0.2s;
}

.vuiNotificationList--hasMany .vuiNotificationList__notifications {
  border-bottom-left-radius: 8px;
}

.vuiNotificationContainer {
  position: relative;
}

.vuiNotification {
  position: relative;
  z-index: 1;
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
  color: #2c313a;
  width: 420px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #ffffff;
}

.vuiNotificationPlaceholder {
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.vuiNotificationPlaceholder1-isVisible {
  bottom: -4px;
  animation: popBottom1 0.2s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

.vuiNotificationPlaceholder2-isVisible {
  bottom: -7px;
  animation: popBottom2 0.2s cubic-bezier(0.5, 0, 0.5, 1) 1;
}

@keyframes popTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes popBottom1 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(2px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes popBottom2 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(8x);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
.vuiOptionsButtonLeft {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.vuiOptionsButtonRight {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid;
}

.vuiButtonPrimary.vuiOptionsButtonRight--accent {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--primary {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--success {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--danger {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--warning {
  border-left-color: rgba(255, 255, 255, 0.5);
}

.vuiButtonPrimary.vuiOptionsButtonRight--neutral {
  border-left-color: rgba(44, 49, 58, 0.2);
}

.vuiButtonSecondary.vuiOptionsButtonRight--accent {
  border-left-color: rgba(85, 30, 223, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--primary {
  border-left-color: rgba(38, 76, 214, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--success {
  border-left-color: rgba(4, 130, 31, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--danger {
  border-left-color: rgba(196, 21, 53, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--warning {
  border-left-color: rgba(150, 90, 21, 0.3);
}

.vuiButtonSecondary.vuiOptionsButtonRight--neutral {
  border-left-color: rgba(44, 49, 58, 0.2);
}

.vuiOptionsList {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.vuiOptionsList--scrollable {
  max-height: 220px;
  overflow-y: auto;
}

.vuiOptionsList--s .vuiOptionsListItem {
  padding: 5px 8px;
}

.vuiOptionsList--m .vuiOptionsListItem {
  padding: 5px 12px;
}

.vuiOptionsList--l .vuiOptionsListItem {
  padding: 8px 12px;
}

.vuiOptionsListItem {
  background-color: #ffffff;
  text-decoration: none;
}
.vuiOptionsListItem:hover {
  text-decoration: underline;
}

.vuiOptionsListItem--accent {
  color: #551edf;
}
.vuiOptionsListItem--accent:hover {
  color: #551edf;
  background-color: #eadfff;
}

.vuiOptionsListItem--primary {
  color: rgb(38, 76, 214);
}
.vuiOptionsListItem--primary:hover {
  color: rgb(38, 76, 214);
  background-color: rgb(217, 226, 255);
}

.vuiOptionsListItem--success {
  color: #04821f;
}
.vuiOptionsListItem--success:hover {
  color: #04821f;
  background-color: #e9f2e9;
}

.vuiOptionsListItem--danger {
  color: #c41535;
}
.vuiOptionsListItem--danger:hover {
  color: #c41535;
  background-color: #fae9eb;
}

.vuiOptionsListItem--warning {
  color: #965a15;
}
.vuiOptionsListItem--warning:hover {
  color: #965a15;
  background-color: #f4eee8;
}

.vuiOptionsListItem--neutral {
  color: #2c313a;
}
.vuiOptionsListItem--neutral:hover {
  color: #2c313a;
  background-color: #f3f7fb;
}

.vuiPopover {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  z-index: 13;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.vuiOptionsListItem__selected--unselected {
  visibility: hidden;
}

.vuiPopoverTitle {
  padding: 8px 12px;
  border-bottom: 1px solid #cbcdde;
  font-weight: 600;
  font-size: 14px;
  color: #2c313a;
}

.vuiPopoverContent {
  padding: 4px 0;
}

.vuiPopoverContent--padding {
  padding: 12px;
}

.vuiProgressBar {
  position: relative;
  border-radius: 4px;
  height: 12px;
  overflow: hidden;
}

.vuiProgressBar__empty,
.vuiProgressBar__bar,
.vuiProgressBar__outline {
  position: absolute;
  width: 100%;
  height: 100%;
}

.vuiProgressBar__empty {
  z-index: 0;
  background-color: #f3f7fb;
  box-shadow: inset rgba(0, 0, 0, 0.05) 0px 2px 2px;
}

.vuiProgressBar__bar {
  transition: all 0.2s;
  z-index: 1;
}

.vuiProgressBar__outline {
  z-index: 2;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.vuiProgressBar--accent .vuiProgressBar__bar {
  background-color: #551edf;
}

.vuiProgressBar--primary .vuiProgressBar__bar {
  background-color: rgb(38, 76, 214);
}

.vuiProgressBar--success .vuiProgressBar__bar {
  background-color: #04821f;
}

.vuiProgressBar--warning .vuiProgressBar__bar {
  background-color: #965a15;
}

.vuiProgressBar--danger .vuiProgressBar__bar {
  background-color: #c41535;
}

.vuiProgressBar--neutral .vuiProgressBar__bar {
  background-color: #69707d;
}

.vuiPrompt {
  position: relative;
  border-radius: 16px;
  transition: all 0.2s;
  word-wrap: break-word;
}

.vuiPrompt--speechBubble::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  left: 48px;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-width: 20px;
  margin-left: -20px;
  margin-bottom: -20px;
  border-top-color: #f3f7fb;
  border-bottom: 0;
}

.vuiPrompt--interactive:hover {
  background-color: #eadfff;
  color: #551edf;
}

.vuiPrompt--danger {
  color: #c41535;
  background-color: #fae9eb;
}

.vuiPrompt--neutral {
  color: #69707d;
  background-color: #f3f7fb;
}

.vuiPrompt--paddingXs {
  padding: 8px;
}

.vuiPrompt--paddingS {
  padding: 12px;
}

.vuiPrompt--paddingM {
  padding: 16px;
}

.vuiPrompt--paddingL {
  padding: 24px;
}

.vuiPrompt--paddingXl {
  padding: 32px;
}

.vuiPrompt--paddingXxl {
  padding: 64px;
}

.vuiScreenBlock {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vuiScreenBlock__mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.vuiSearchInput {
  position: relative;
  display: flex;
  align-items: center;
}

.vuiSearchInput__input {
  flex-grow: 1;
  padding: 12px 16px;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  outline-width: 1px !important;
  outline-style: solid;
  outline-color: transparent;
  outline-offset: -1px !important;
}
.vuiSearchInput__input:focus-visible {
  background-color: #f3f7fb;
  outline-color: #551edf !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiSearchInput__submitButton {
  position: absolute;
  right: 12px;
  line-height: 0;
  color: #69707d;
  transition: all 0.2s;
}
.vuiSearchInput__submitButton:hover {
  color: #551edf;
}

.vuiSearchInput--m .vuiSearchInput__input {
  font-size: 14px;
}

.vuiSearchInput--l .vuiSearchInput__input {
  font-size: 18px;
}

.vuiSearchResult {
  position: relative;
}
.vuiSearchResult + .vuiSearchResult {
  margin-top: 24px;
}

.vuiSearchResultPosition {
  position: absolute;
  left: -42px;
  top: 0;
  font-weight: 600;
  padding: 8px;
  color: #69707d;
  padding: 4px 8px;
  width: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  height: 23px;
  transition: all 0.2s;
}

.vuiSearchResultPosition--selected {
  background-color: rgb(38, 76, 214);
  color: #ffffff;
  height: 100%;
}

.vuiSearchSelectHeader {
  background-color: #f3f7fb;
  padding: 16px;
  border-bottom: 1px solid #cbcdde;
  font-weight: 600;
  font-size: 14px;
  color: #2c313a;
}

.vuiSearchSelect__search {
  padding: 4px 8px;
  border-bottom: 1px solid #cbcdde;
}

.vuiSpacer {
  flex-shrink: 0;
}

.vuiSpacer--xxxs {
  height: 2px;
}

.vuiSpacer--xxs {
  height: 4px;
}

.vuiSpacer--xs {
  height: 8px;
}

.vuiSpacer--s {
  height: 12px;
}

.vuiSpacer--m {
  height: 16px;
}

.vuiSpacer--l {
  height: 24px;
}

.vuiSpacer--xl {
  height: 32px;
}

.vuiSpacer--xxl {
  height: 40px;
}

.vuiSpinner--xs {
  width: 16px;
  height: 16px;
}

.vuiSpinner--s {
  width: 24px;
  height: 24px;
}

.vuiSpinner--m {
  width: 32px;
  height: 32px;
}

.vuiSpinner--l {
  width: 48px;
  height: 48px;
}

.vuiSpinner--xl {
  width: 64px;
  height: 64px;
}

.vuiSpinner--xxl {
  width: 80px;
  height: 80px;
}

.vuiSpinner--xxxl {
  width: 100px;
  height: 100px;
}

.vuiSpinner__animation {
  width: 100%;
  height: 100%;
}

.vuiSummary {
  font-size: 16px;
}

.vuiSummaryCitation {
  position: relative;
  top: -2px;
  display: inline-block !important;
}

.vuiSummaryCitation-isSelected {
  background-color: rgb(38, 76, 214);
  color: #ffffff;
}

.vuiTable {
  width: 100%;
  table-layout: fixed;
}
.vuiTable thead {
  border-bottom: 1px solid #cbcdde;
}
.vuiTable tbody tr {
  border-bottom: 1px solid #e3e4f3;
}
.vuiTable tbody tr.vuiTableRow-isBeingActedUpon, .vuiTable tbody tr:not(.vuiTableRow--inert):hover {
  background-color: #f3f7fb;
}
.vuiTable tbody tr:last-child {
  border-bottom: 1px solid #cbcdde;
}
.vuiTable th {
  font-size: 14px;
  font-weight: 600;
  padding: 4px;
}
.vuiTable td {
  font-size: 14px;
  padding: 4px;
  vertical-align: middle;
  word-break: break-word;
}

.vuiTable--fluid {
  table-layout: auto;
}

.vuiTableCell {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.vuiTableActions {
  display: flex;
  justify-content: flex-end;
}

.vuiTableManyPagesToken {
  padding: 0 8px;
}

.vuiTableManyPagesToken-isDisabled {
  opacity: 0.5;
}

.vuiTableHeaderSelect {
  width: 32px;
}

.vuiTableHeaderActions {
  width: 42px;
}

.vuiTableContent {
  height: 80px;
}

.vuiTabs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbcdde;
  justify-content: space-between;
}

.vuiTabs--s .vuiTab {
  padding: 8px 12px;
  font-size: 14px;
}

.vuiTabs--m .vuiTab {
  padding: 8px 16px;
  font-size: 16px;
}

.vuiTabs__tabs {
  display: flex;
  align-items: center;
}

.vuiTabs__appendedContent {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiTab {
  flex-grow: 0;
  flex-shrink: 0;
  color: #69707d;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: transparent 0px 1px 0px;
  cursor: pointer;
}
.vuiTab:hover, .vuiTab:active {
  color: #551edf;
  text-decoration: none;
}
.vuiTab:hover {
  background-color: #f3f7fb;
}
.vuiTab:active {
  background-color: rgba(85, 30, 223, 0.1);
}
.vuiTab.vuiTab-isActive {
  color: #2c313a;
  box-shadow: #551edf 0px 1px 0px;
}

.vuiToggle {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.vuiToggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}
.vuiToggle__input:checked + .vuiToggle__button {
  background-color: rgb(38, 76, 214);
}
.vuiToggle__input:focus-visible + .vuiToggle__button {
  outline: 2px solid rgba(38, 76, 214, 0.75);
  outline-offset: 2px;
}
.vuiToggle__input:checked + .vuiToggle__button:before {
  transform: translateX(16px);
}

.vuiToggle__button {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cbcdde;
  transition: 0.2s;
  border-radius: 16px;
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}
.vuiToggle__button:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  transition: 0.2s;
  border-radius: 50%;
}

.vuiTitle {
  color: #2c313a;
  margin-bottom: 0;
}

.vuiTitle--xxs {
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xs {
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--s {
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: #69707d;
}

.vuiTitle--m {
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--l {
  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xxl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--left {
  text-align: left;
}

.vuiTitle--center {
  text-align: center;
}

.vuiTitle--right {
  text-align: right;
}

.vuiText {
  overflow-wrap: break-word;
  word-break: break-word;
}
.vuiText ul {
  list-style: disc;
}
.vuiText ol {
  list-style: auto;
}
.vuiText ul,
.vuiText ol {
  margin-left: 16px;
  margin-bottom: 8px;
}
.vuiText ul:last-child,
.vuiText ol:last-child {
  margin-bottom: 0;
}
.vuiText a {
  color: rgb(38, 76, 214);
}

.vuiText--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiText--truncate * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vuiText--xs {
  color: #2c313a;
  font-size: 12px;
  line-height: 1.4;
}
.vuiText--xs p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--xs p:last-child {
  margin-bottom: 0;
}

.vuiText--s {
  color: #2c313a;
  font-size: 14px;
  line-height: 1.4;
}
.vuiText--s p {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--s p:last-child {
  margin-bottom: 0;
}

.vuiText--m {
  color: #2c313a;
  font-size: 16px;
  line-height: 1.4;
}
.vuiText--m p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--m p:last-child {
  margin-bottom: 0;
}

.vuiText--l {
  color: #2c313a;
  font-size: 18px;
  line-height: 1.4;
}
.vuiText--l p {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--l p:last-child {
  margin-bottom: 0;
}

.vuiText--left {
  text-align: left;
}

.vuiText--center {
  text-align: center;
}

.vuiText--right {
  text-align: right;
}

.vuiTextColor--accent {
  color: #551edf !important;
}

.vuiTextColor--primary {
  color: rgb(38, 76, 214) !important;
}

.vuiTextColor--success {
  color: #04821f !important;
}

.vuiTextColor--warning {
  color: #965a15 !important;
}

.vuiTextColor--danger {
  color: #c41535 !important;
}

.vuiTextColor--subdued {
  color: #69707d !important;
}

.vuiTextColor--neutral {
  color: #2c313a !important;
}`;
  document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
})();
