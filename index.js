

function getByID(id) {
  var el = document.getElementById(id);
  return (el) ? el : (err_trace('getByID not get element by id => "#'+id+'"'));
}

function getTarget (e) { return e && e.target || e.srcElement; }


// var Binder = function (obj, dom_field) {

//   Object.defineProperty(obj, 'value', {
//     set: function (val) {
//       console.log('set', getByID(obj.id));
//       getByID(obj.id)[dom_field] = val;
//     },
//     get: function() {
//       return getByID(obj.id)[dom_field];
//     },
//     configurable: true
//   });

// };

var user = { login: 'Vasya', password: 'Pupkin' }
// Binder(user, 'value');


/**
 * Binding
 * @param {{
 * {
 *   obj: object,
 *   prop: string,
 *   dom_el: HTMLDomElement,
 *   [dom_key='value']: string,
 * }
 * }} params
 * @example
 * {
 *   obj: user,
 *   prop: 'login',
 *   dom_el: getByID('i_1'),
 *   dom_key: 'value',
 * }
 */
function Binding(params) {
  var obj = params.obj;
  var prop = params.prop;
  var dom_el = params.dom_el;
  var dom_key = params.dom_key || 'value';

  var original_value = obj[prop];

  Object.defineProperty(obj, prop, {
    get: function() {
      return dom_el[dom_key];
    },
    set: function(newValue) {
      dom_el[dom_key] = newValue;
    },
    configurable: true
  });

  obj[prop] = original_value;

  // TODO: create list events
  /**
   * add_listen_event
   * @param {sting}   event 'input'
   * @param {function(e, value)} cb
   */
  this.add_listen_event = function (event, cb) {
    dom_el.addEventListener(event, function (e) {
      var t = getTarget(e);
      cb(e, t.value);
    });
  };

  // TODO:
  // this.remove_listener_event = function(event, $el, cb) {
  //   $el.removeEventListener(event, cb);
  // };

}

new Binding({
  obj: user,
  prop: 'login',
  dom_el: getByID('i_1'),
  // dom_key: 'value',
}).add_listen_event('input', function (e, val) {
  console.log('event:[input] login=', user.login);
});

new Binding({
  obj: user,
  prop: 'password',
  dom_el: getByID('i_2'),
  // dom_key: 'value',
});



void function() {
  function FormValidator() {

  }
  getByID('i_11')
  getByID('i_22')
}();