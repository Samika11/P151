AFRAME.registerComponent("car",{
    schema:{
        radius: {type: "number", default: 200},
      height: {type:"number", default: 5}
    },
    init: function () {
      this.el.setAttribute("geometry",{
        src:"tinker.obj",
        radius: this.data.radius,
        height: this.data.height
      });
      this.el.setAttribute("material",{color:"red"})
      }
  });