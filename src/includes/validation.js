import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  is_not,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("confirmed", confirmed);
    defineRule("is_not", is_not);
    defineRule("excluded", excluded);
    defineRule("password_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } is required.`,
          min: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } is too short.`,
          max: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } is too long.`,
          alpha_spaces: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } may only contain alphabetic characters and spaces.`,
          email: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } field must be a valid email.`,
          min_value: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } is too low.`,
          max_value: `${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } is too high.`,
          excluded: `You are not allowed to use this value for the  ${
            ctx.field[0].toUpperCase() + ctx.field.substring(1)
          } field.`,
          password_excluded: `Do yourself a favour and don't use "password" as a password!!!`,
          confirmed: `The passwords don't match. Try again!!`,
          is_not: `Greenland is just not an option here!!!`,
          tos: `You must accept the Terms of Service.`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `${ctx.field} field is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
