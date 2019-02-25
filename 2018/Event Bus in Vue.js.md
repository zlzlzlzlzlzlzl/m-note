# Event Bus in Vue.js

在更大的 Vue.js 项目中，您可能会将事件总线抽象为单个文件，将其导入到需要使用的每个组件文件中。这样，它不会污染全局命名空间。
或者，您可以通过向 Vue.js 原型，在默认情况下将其提供给任何 Vue.js 组件 Object.defineProperty

```javascript
// Create a global Event Bus
const EventBus = new Vue()

// Add to Vue properties by exposing a getter for $bus
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
        return EventBus;
    }
  }
}
```

允许Vue.js组件的事件总线：

```javascript
// Emit an Event from a Component using the internal Event Bus

const ComponentWithEventBus = Vue.extend({
  mounted: function(){
    this.$bus.$emit('status', 'Component mounted')
    this.$bus.$on('something', ()=>{
      console.log("Something happened");
    });
  }  
});
```