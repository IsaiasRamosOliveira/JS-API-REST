import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
  validator: (value) => value !== '',
  message: ({ path }) => `O campo ${path} ficou com valor em branco.`
});
