const success = (api) => {
  api.start(() => console.log("Viewer started"));
};

var iframe = document.getElementById("api-frame");
var uid = "f68b68cb9ea94e87ab910b10e45db551";

// By default, the latest version of the viewer API will be used.
var client = new Sketchfab(iframe);

// Alternatively, you can request a specific version.
// var client = new Sketchfab("1.12.1", iframe);

client.init(uid, {
  success: success,
  error: function onError() {
    console.log("Viewer error");
  },
  ui_stop: 0,
  preload: 1,
  camera: 0,
});
