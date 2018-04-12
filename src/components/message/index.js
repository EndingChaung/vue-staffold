import Vue from 'vue';

const MessageConstructor = Vue.extend(require('./Message.vue'));

let instance;
let seed = 1;

function message(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  const id = `message_${seed += 1}`;
  instance = new MessageConstructor({
    data: options,
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instance.dom = instance.$el;
  return instance;
}

function typeMessage(options, posi = 'center', messageType = 'dark') {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
      type: messageType,
      position: posi,
    };
  } else if (typeof options === 'object') {
    options = {
      ...options,
      type: messageType,
      position: posi,
    };
  }
  message(options);
}

function warnMessage(options) {
  typeMessage(options, 'top', 'warn');
}
function infoMessage(options) {
  typeMessage(options, 'top', 'info');
}
function errorMessage(options) {
  typeMessage(options, 'top', 'error');
}
function successMessage(options) {
  typeMessage(options, 'top', 'success');
}

Vue.prototype.$message = typeMessage;
Vue.prototype.$infoMessage = infoMessage;
Vue.prototype.$successMessage = successMessage;
Vue.prototype.$warnMessage = warnMessage;
Vue.prototype.$errorMessage = errorMessage;
