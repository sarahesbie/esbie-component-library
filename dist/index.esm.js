import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useState, useContext } from 'react';

var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return jsx("button", { onClick: onClick, children: children });
};

var Icon = function (_a) {
    var children = _a.children, link = _a.link;
    var content = jsx("span", { children: children });
    return link ? (jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: content })) : (content);
};

var Card = function (_a) {
    var children = _a.children, link = _a.link, id = _a.id;
    var content = (jsx("div", { id: id, style: { border: "1px solid #ccc", padding: "1rem", borderRadius: "4px" }, children: children }));
    return link ? (jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: content })) : (content);
};

var Image = function (_a) {
    var src = _a.src, alt = _a.alt, link = _a.link, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var image = (jsx("img", { src: src, alt: alt, width: width, height: height, className: className, style: style }));
    return link ? (jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: image })) : (image);
};

var Heading = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 1 : _b, children = _a.children;
    var Tag = "h".concat(level);
    return jsx(Tag, { children: children });
};

var Text = function (_a) {
    var children = _a.children;
    return jsx("span", { children: children });
};

var ThemeContext = createContext(undefined);
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState("light"), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === "light" ? "dark" : "light"); });
    };
    return (jsx(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme }, children: children }));
};
var useTheme = function () {
    var context = useContext(ThemeContext);
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
    return jsx("p", { className: "".concat(styles$2.paragraph, " ").concat(themeClass), children: children });
};

var Toggle = function (_a) {
    var onToggle = _a.onToggle, isActive = _a.isActive;
    return (jsx("div", { onClick: onToggle, style: {
            width: "50px",
            height: "24px",
            borderRadius: "12px",
            backgroundColor: isActive ? "#4CAF50" : "#ccc",
            cursor: "pointer",
            position: "relative",
        }, children: jsx("div", { style: {
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
    return (jsx(Image, { src: src, alt: alt, style: {
            border: borderStyles[borderStyle],
            borderRadius: borderStyle === "rounded" ? "50%" : "0",
        } }));
};

var InteractiveHeading = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 1 : _b, children = _a.children, tooltip = _a.tooltip;
    return (jsx(Heading, { level: level, children: jsx("span", { title: tooltip, children: children }) }));
};

var IconWithCaption = function (_a) {
    var icon = _a.icon, caption = _a.caption;
    return (jsxs("div", { style: { textAlign: "center" }, children: [jsx(Icon, { children: icon }), jsx(Text, { children: caption })] }));
};

var ThemeToggle = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    var isDarkMode = theme === "dark";
    return jsx(Toggle, { onToggle: toggleTheme, isActive: isDarkMode });
};

var IconGallery = function (_a) {
    var icons = _a.icons, _b = _a.withCaptions, withCaptions = _b === void 0 ? false : _b;
    return (jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
            gap: "1rem",
        }, children: icons.map(function (item, index) {
            return withCaptions ? (jsx(IconWithCaption, { icon: item.icon, caption: item.caption || "" }, index)) : (jsx(Icon, { children: item.icon }, index));
        }) }));
};

var CardGallery = function (_a) {
    var cards = _a.cards, galleryId = _a.galleryId;
    return (jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
        }, children: cards.map(function (card, index) { return (jsx(Card, { id: "".concat(galleryId, "-card-").concat(index), children: card }, "".concat(galleryId, "-").concat(index))); }) }));
};

var css_248z$1 = ".ImageTextBlock-module_container__2iyC-{background-color:transparent;display:flex}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_image-container__d1LPP{flex:1 1 33%;margin-right:1rem}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_text-container__23Imt{flex:1 1 67%}@media (max-width:600px){.ImageTextBlock-module_container__2iyC-{flex-direction:column}.ImageTextBlock-module_container__2iyC- .ImageTextBlock-module_image-container__d1LPP{margin-bottom:1rem;margin-right:0}}";
var styles$1 = {"container":"ImageTextBlock-module_container__2iyC-","image-container":"ImageTextBlock-module_image-container__d1LPP","text-container":"ImageTextBlock-module_text-container__23Imt"};
styleInject(css_248z$1);

var ImageTextBlock = function (_a) {
    var imageSrc = _a.imageSrc, altText = _a.altText, children = _a.children;
    return (jsxs("div", { className: styles$1.container, children: [jsx("div", { className: styles$1["image-container"], children: jsx(StyledImage, { src: imageSrc, alt: altText }) }), jsx("div", { className: styles$1["text-container"], children: children })] }));
};

var TwoColumnBlock = function (_a) {
    var leftColumn = _a.leftColumn, rightColumn = _a.rightColumn;
    return (jsxs("div", { style: { display: "flex" }, children: [jsx("div", { style: { flex: "1 1 50%" }, children: leftColumn }), jsx("div", { style: { flex: "1 1 50%", paddingLeft: "1rem" }, children: rightColumn })] }));
};

var css_248z = ".FullWidthSection-module_section__wizHU{box-sizing:border-box;padding:2rem;width:100%}.FullWidthSection-module_section--dark__-fmzl{background-color:#333;color:#fff}.FullWidthSection-module_section--light__Oj07L{background-color:#fff;color:#000}@media (max-width:600px){.FullWidthSection-module_section__wizHU{padding:1rem}}";
var styles = {"section":"FullWidthSection-module_section__wizHU","section--dark":"FullWidthSection-module_section--dark__-fmzl","section--light":"FullWidthSection-module_section--light__Oj07L"};
styleInject(css_248z);

var FullWidthSection = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "light" : _b;
    return (jsx("section", { className: "".concat(styles.section, " ").concat(theme === "dark" ? styles["section--dark"] : styles["section--light"]), children: children }));
};

export { Button, Card, CardGallery, FullWidthSection, Heading, Icon, IconGallery, IconWithCaption, Image, ImageTextBlock, InteractiveHeading, Paragraph, StyledImage, Text, ThemeProvider, ThemeToggle, Toggle, TwoColumnBlock, useTheme };
//# sourceMappingURL=index.esm.js.map
