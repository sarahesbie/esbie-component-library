'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return jsxRuntime.jsx("button", { onClick: onClick, children: children });
};

var Icon = function (_a) {
    var children = _a.children, link = _a.link;
    var content = jsxRuntime.jsx("span", { children: children });
    return link ? (jsxRuntime.jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: content })) : (content);
};

var Card = function (_a) {
    var children = _a.children, link = _a.link, id = _a.id;
    var content = (jsxRuntime.jsx("div", { id: id, style: { border: "1px solid #ccc", padding: "1rem", borderRadius: "4px" }, children: children }));
    return link ? (jsxRuntime.jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: content })) : (content);
};

var Image = function (_a) {
    var src = _a.src, alt = _a.alt, link = _a.link, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var image = (jsxRuntime.jsx("img", { src: src, alt: alt, width: width, height: height, className: className, style: style }));
    return link ? (jsxRuntime.jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: image })) : (image);
};

var Heading = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 1 : _b, children = _a.children;
    var Tag = "h".concat(level);
    return jsxRuntime.jsx(Tag, { children: children });
};

var Text = function (_a) {
    var children = _a.children;
    return jsxRuntime.jsx("span", { children: children });
};

var ThemeContext = react.createContext(undefined);
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = react.useState("light"), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === "light" ? "dark" : "light"); });
    };
    return (jsxRuntime.jsx(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme }, children: children }));
};
var useTheme = function () {
    var context = react.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Paragraph-module_paragraph__76QSu{font-size:1rem;padding:1rem}.Paragraph-module_light__Y874c{background-color:#fff;color:#000}.Paragraph-module_dark__kP5DQ{background-color:#000;color:#fff}";
var styles$2 = {"paragraph":"Paragraph-module_paragraph__76QSu","light":"Paragraph-module_light__Y874c","dark":"Paragraph-module_dark__kP5DQ"};
styleInject(css_248z$2);

var Paragraph = function (_a) {
    var children = _a.children;
    var theme = useTheme().theme;
    var themeClass = theme === "dark" ? styles$2.dark : styles$2.light;
    return jsxRuntime.jsx("p", { className: "".concat(styles$2.paragraph, " ").concat(themeClass), children: children });
};

var Toggle = function (_a) {
    var onToggle = _a.onToggle, isActive = _a.isActive;
    return (jsxRuntime.jsx("div", { onClick: onToggle, style: {
            width: "50px",
            height: "24px",
            borderRadius: "12px",
            backgroundColor: isActive ? "#4CAF50" : "#ccc",
            cursor: "pointer",
            position: "relative",
        }, children: jsxRuntime.jsx("div", { style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                top: "1px",
                left: isActive ? "26px" : "2px",
                transition: "left 0.3s",
            } }) }));
};

var StyledImage = function (_a) {
    var src = _a.src, alt = _a.alt, _b = _a.borderStyle, borderStyle = _b === void 0 ? "none" : _b;
    var borderStyles = {
        none: "none",
        solid: "1px solid black",
        dashed: "1px dashed black",
        rounded: "1px solid black",
    };
    return (jsxRuntime.jsx(Image, { src: src, alt: alt, style: {
            border: borderStyles[borderStyle],
            borderRadius: borderStyle === "rounded" ? "50%" : "0",
        } }));
};

var InteractiveHeading = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 1 : _b, children = _a.children, tooltip = _a.tooltip;
    return (jsxRuntime.jsx(Heading, { level: level, children: jsxRuntime.jsx("span", { title: tooltip, children: children }) }));
};

var IconWithCaption = function (_a) {
    var icon = _a.icon, caption = _a.caption;
    return (jsxRuntime.jsxs("div", { style: { textAlign: "center" }, children: [jsxRuntime.jsx(Icon, { children: icon }), jsxRuntime.jsx(Text, { children: caption })] }));
};

var ThemeToggle = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    var isDarkMode = theme === "dark";
    return jsxRuntime.jsx(Toggle, { onToggle: toggleTheme, isActive: isDarkMode });
};

var IconGallery = function (_a) {
    var icons = _a.icons, _b = _a.withCaptions, withCaptions = _b === void 0 ? false : _b;
    return (jsxRuntime.jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
            gap: "1rem",
        }, children: icons.map(function (item, index) {
            return withCaptions ? (jsxRuntime.jsx(IconWithCaption, { icon: item.icon, caption: item.caption || "" }, index)) : (jsxRuntime.jsx(Icon, { children: item.icon }, index));
        }) }));
};

var CardGallery = function (_a) {
    var cards = _a.cards, galleryId = _a.galleryId;
    return (jsxRuntime.jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
        }, children: cards.map(function (card, index) { return (jsxRuntime.jsx(Card, { id: "".concat(galleryId, "-card-").concat(index), children: card }, "".concat(galleryId, "-").concat(index))); }) }));
};

var css_248z$1 = ".ImageTextBlock-module_container__2iyC-{background-color:transparent;display:flex}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_image-container__d1LPP{flex:1 1 33%;margin-right:1rem}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_text-container__23Imt{flex:1 1 67%}@media (max-width:600px){.ImageTextBlock-module_container__2iyC-{flex-direction:column}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_image-container__d1LPP{margin-bottom:1rem;margin-right:0}}";
var styles$1 = {"container":"ImageTextBlock-module_container__2iyC-","image-container":"ImageTextBlock-module_image-container__d1LPP","text-container":"ImageTextBlock-module_text-container__23Imt"};
styleInject(css_248z$1);

var ImageTextBlock = function (_a) {
    var imageSrc = _a.imageSrc, altText = _a.altText, children = _a.children;
    return (jsxRuntime.jsxs("div", { className: styles$1.container, children: [jsxRuntime.jsx("div", { className: styles$1["image-container"], children: jsxRuntime.jsx(StyledImage, { src: imageSrc, alt: altText }) }), jsxRuntime.jsx("div", { className: styles$1["text-container"], children: children })] }));
};

var TwoColumnBlock = function (_a) {
    var leftColumn = _a.leftColumn, rightColumn = _a.rightColumn;
    return (jsxRuntime.jsxs("div", { style: { display: "flex" }, children: [jsxRuntime.jsx("div", { style: { flex: "1 1 50%" }, children: leftColumn }), jsxRuntime.jsx("div", { style: { flex: "1 1 50%", paddingLeft: "1rem" }, children: rightColumn })] }));
};

var css_248z = ".FullWidthSection-module_section__wizHU{box-sizing:border-box;padding:2rem;width:100%}.FullWidthSection-module_section--dark__-fmzl{background-color:#333;color:#fff}.FullWidthSection-module_section--light__Oj07L{background-color:#fff;color:#000}@media (max-width:600px){.FullWidthSection-module_section__wizHU{padding:1rem}}";
var styles = {"section":"FullWidthSection-module_section__wizHU","section--dark":"FullWidthSection-module_section--dark__-fmzl","section--light":"FullWidthSection-module_section--light__Oj07L"};
styleInject(css_248z);

var FullWidthSection = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "light" : _b;
    return (jsxRuntime.jsx("section", { className: "".concat(styles.section, " ").concat(theme === "dark" ? styles["section--dark"] : styles["section--light"]), children: children }));
};

exports.Button = Button;
exports.Card = Card;
exports.CardGallery = CardGallery;
exports.FullWidthSection = FullWidthSection;
exports.Heading = Heading;
exports.Icon = Icon;
exports.IconGallery = IconGallery;
exports.IconWithCaption = IconWithCaption;
exports.Image = Image;
exports.ImageTextBlock = ImageTextBlock;
exports.InteractiveHeading = InteractiveHeading;
exports.Paragraph = Paragraph;
exports.StyledImage = StyledImage;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.ThemeToggle = ThemeToggle;
exports.Toggle = Toggle;
exports.TwoColumnBlock = TwoColumnBlock;
exports.useTheme = useTheme;
//# sourceMappingURL=index.cjs.js.map
