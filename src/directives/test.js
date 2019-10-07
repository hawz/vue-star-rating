export default (el, binding) => {
  // A directive hook can take several arguments, but in this case we only need two,
  // `el` and `binding`: the first refers to the element the directive is bound to,
  // the second argument is an object which contains the data we passed in the directive.
  // This way we can manipulate the element as we like.

  // In this particular case, we need this directive for testing purposes: we pass
  // an object to our directive, so we can generate data attributes starting with
  // `data-test-`, In the handler function, we iterate over each property of binding,
  // and we set a data attribute based on the name and value, on our element.

  Object.keys(binding.value).forEach(value => {
    if (process.env.NODE_ENV === "test") {
      el.setAttribute(`data-test-${value}`, binding.value[value]);
    }
  });
};
