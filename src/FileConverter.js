export const convertToLuaTxt = (settings, currency) => {
  let settingsText = "";
  for (const [key, value] of Object.entries(settings)) {
    settingsText += `\tserver.setGameSetting(${key}, ${value})\n`;
  }
  return `function onCreate()
  ${settingsText}
  if (is_start) then
  \tserver.setCurrency(${currency.cash}, ${currency.research})
  end\n
  -- finally, lock the settings so they can't be changed
  \tserver.setGameSetting("settings_menu", false)\n
  end\n
  `;
};
