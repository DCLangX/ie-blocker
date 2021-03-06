(function () {
    var ibContainer;
    var html;
    var browserIcons;
    var scriptPath;
    var imgPath;
    var browserName;
    
    ibContainer = document.createElement('div');
    ibContainer.setAttribute('id', 'ib-container');

    html += "<div class=\"ib-modal\">";
    html += "    <div class=\"ib-header\">";
    html += "        <h1>You are using an outdated browser.<\/h1>";
    html += "        <p>To display the website correctly and protect your information,";
    html += "            <br><strong>please use one of these up-to-date, free and excellent browsers.<\/strong>";
    html += "        <\/p>";
    html += "    <\/div>";
    html += "    <ul class=\"ib-browsers\">";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.google.com\/chrome\/browser\/desktop\/index.html\">";
    html += "                <i class=\"ib-browser-icon ib-ua-chrome\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Chrome<\/div>";
    html += "                <div class=\"ib-browser-description\">A fast new browser from Google.<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.firefox.com\">";
    html += "                <i class=\"ib-browser-icon ib-ua-firefox\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Firefox<\/div>";
    html += "                <div class=\"ib-browser-description\">Your online security is Firefox's top priority<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"https:\/\/www.apple.com\/safari\">";
    html += "                <i class=\"ib-browser-icon ib-ua-safari\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Safari<\/div>";
    html += "                <div class=\"ib-browser-description\">Safari for Mac from Apple, the world's most innovative browser.<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.opera.com\">";
    html += "                <i class=\"ib-browser-icon ib-ua-opera\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Opera<\/div>";
    html += "                <div class=\"ib-browser-description\">The fastest browser on Earth.<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/windows.microsoft.com\/en-US\/internet-explorer\/download-ie\">";
    html += "                <i class=\"ib-browser-icon ib-ua-ie11\"><\/i>";
    html += "                <div class=\"ib-browser-name\">IE 11<\/div>";
    html += "                <div class=\"ib-browser-description\">Designed to help you take control of your privacy. Free from Microsoft.<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "    <\/ul>";
    html += "    <div class=\"ib-footer\">";
    html += "        <a class=\"ib-try\" href=\"http:\/\/www.google.com\/chrome\/browser\/desktop\/index.html\">Try Chrome now!<\/a>";
    html += "    <\/div>";
    html += "<\/div>";
    html += "<div class=\"ib-mask\"><\/div>";

    ibContainer.innerHTML = html;

    // the path to the image cannot be relative in a filter. Have to use javascript to get the absolute path.
    browserIcons = ibContainer.getElementsByTagName('i');

    for (var i = 0; i < document.scripts.length; i++) {
        if (match = document.scripts[i].src.match(/(.*)ie-blocker.en\.js/)) {
            scriptPath = match[1];
            imgPath = scriptPath + (document.scripts[i].getAttribute('img-path') || 'img/');
            break;
        }
    }

    for (var i = 0; i < browserIcons.length; i++) {
        if (browserName = browserIcons[i].className.match(/ib-ua-(\w+)/)[1]) {
            browserIcons[i].style['filter'] = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                imgPath + browserName + '.png")';
        }
    }

    window.onload = function () {
        document.body.appendChild(ibContainer);
        ibContainer.style.display = 'block';
    };
})();
