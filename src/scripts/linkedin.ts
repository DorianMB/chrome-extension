import { Result } from "../models/result";

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
  let res  = null;
  if (msg.subject.status === "complete") {
    res = document.getElementsByClassName("inline t-24 t-black t-normal break-words");
    const result = {
      message: msg,
      name: res[0].innerHTML.toString().replace("[\\r\\n]+", ""),
      document: document
    };
    console.log('lol', res[0].innerHTML.toString().replace("[\\r\\n]+", ""), document);
    res[0].innerHTML = "Dommage j'ai pas réussi a faire mieux !";
    response(result);
  }

  return true;
});
