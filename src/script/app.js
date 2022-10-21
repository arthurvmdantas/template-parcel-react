const title = document.getElementsByClassName("title")[0];
title.innerHTML = `${title.innerHTML} - ${(new Date()).toDateString()}`