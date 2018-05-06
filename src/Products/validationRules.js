export default value => ({
  error:
    !value || !/Commando 450/.test(value)
      ? "Input must contain 'Commando 450'"
      : null,
  warning:
    !value || !/^Commando 450$/.test(value)
      ? "Input should equal just 'Commando 450'"
      : null,
  success:
    value && /Commando 450/.test(value)
      ? "Thanks for entering 'Commando 450'!"
      : null
});
