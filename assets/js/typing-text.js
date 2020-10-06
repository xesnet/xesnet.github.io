$(function () {
   var CharacterPos = 0;
   var MsgBuffer = "";
   var TypeDelay = 75; 
   var NxtMsgDelay = 5000;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["Starting XES...\nC:\\4chanbiz>exec shitcoin.exe\nDeploying erc20 token...\nLoading bags...\nGenerating memes...\nHiring shills...\nBanning low level fud...\nInstalling Coinbase rumors...\nContacting Chad...\n\nC:\\4chanbiz>exec pump.exe\nDownloading 100x gains...\n\nDownload Complete!\n"];

   function StartTyping() {
      var id = document.getElementById("typing-text");
      if (CharacterPos != MsgArray[MsgIndex].length) {
         MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
         id.value = MsgBuffer+"_";
         delay = TypeDelay;
         id.scrollTop = id.scrollHeight; 
      } else {
         delay = NxtMsgDelay;
         MsgBuffer   = "";
         CharacterPos = -1;
         if (MsgIndex!=MsgArray.length-1){
           MsgIndex++;
         }else {
           MsgIndex = 0;
         }
       }
       CharacterPos++;
       setTimeout(StartTyping,delay);
   }
StartTyping();
})();
