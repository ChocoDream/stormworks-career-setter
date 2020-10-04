export const convertToLuaTxt = (settings) => {
  let settingsText = "";
  for (const [key, value] of Object.entries(settings)) {
    settingsText += (`\tserver.setGameSetting(${key}, ${value})\n`)
  }
  return `function onCreate()
  ${settingsText}
}
-- finally, lock the settings so they can't be changed\n
\tserver.setGameSetting("settings_menu", false)\n
end\n
  `;
};
