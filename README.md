<div align='center'>﻿<img src='./icons/shell-logo-replacement.png' width='80%'></div>
<h1 align='center'>StateFarm Client</h1>
<h3 align='center'>for Shell Shockers</h3>
<br><br>

<div align='center'>

[![Greasyfork Installs](https://shields.io/greasyfork/dt/482982?style=for-the-badge&labelColor=black&logo=greasyfork&color=e61005)](https://greasyfork.org/en/scripts/482982-statefarm-client-v3-combat-bloom-esp-rendering-chat-automation-botting-unbanning-and-more)
[![Current Version](https://shields.io/greasyfork/v/482982?style=for-the-badge&label=version&labelColor=black&color=8507f2)](https://github.com/Hydroflame522/StateFarmClient/raw/main/StateFarmClient.js)
[![Discord Members](https://shields.io/discord/988104240000028706?style=for-the-badge&label=discord&logo=discord&labelColor=black&color=5865F2)](https://dsc.gg/sfnetwork)

</div>
<br><br>

StateFarm is the **BEST** hack client for Shell Shockers (shellshock.io), including **Aimbot**, **ESP**, **Bloom Hacks**, **Botting**, **Custom Binding**, **Highly Customisable Modules**, **Chat Mods** and so much more!<br>

> StateFarm Client V3 is based off [LibertyMutual Client](https://github.com/onlypuppy7/LibertyMutualShellShockers) <br>
> This is a simpler template client, intended to be a base for StateFarm but anyone is welcome to use it in their own projects. <br>
 
<h3 align='center'>Join our <a href='https://dsc.gg/sfnetwork'>Discord Server</a> for the latest news!</h3>
<br>

The information below is accurate as of StateFarm version **3.4.0-pre57**.
<br><br>

<h1 align='center'>Table of Contents</h1>
<br>

- [Download Sources:](#download-sources)
- [Installation Tutorial:](#installation-tutorial)
- [Getting Started:](#getting-started)
    - [Aimbot](#aimbot)
    - [ESP](#esp)
- [ Features:](#-features)
    - [Binding Modules:](#binding-modules)
    - [ Combat:](#-combat)
    - [ Render:](#-render)
    - [ HUD:](#-hud)
    - [ Chat:](#-chat)
    - [ Lists:](#-lists)
  - [ Automation:](#-automation)
  - [ Botting:](#-botting)
    - [Base Instructions:](#base-instructions)
    - [Deploy](#deploy)
    - [Manage](#manage)
    - [Params](#params)
  - [ Themeing:](#-themeing)
  - [ Miscellaneous:](#-miscellaneous)
  - [ Client \& About:](#-client--about)
- [Adblocking](#adblocking)
- [Issues and Troubleshooting](#issues-and-troubleshooting)
- [Credits \& Disclaimer](#credits--disclaimer)

<br>
   
# [](#download-sources)Download Sources:
- [GitHub Repository](https://github.com/Hydroflame522/StateFarmClient).
- [GreasyFork](https://greasyfork.org/scripts/482982).

<br>

# [](#installation-tutorial)Installation Tutorial:
Before you can install the client, there are a few things you must set up to be able to run userscripts.
1. Install Tampermonkey from [https://tampermonkey.net/](https://tampermonkey.net/) or any other userscript manager.
2. Open the Tampermonkey dashboard.
3. Visit the [GreasyFork](https://greasyfork.org/scripts/482982) page & click `Install this script`.
    - Alternatively, use the raw version from [Github](https://github.com/Hydroflame522/StateFarmClient/raw/main/StateFarmClient.js).
4. Visit [https://shellshock.io](https://shellshock.io/) (or another Shell Shockers link), & use StateFarm!

<br>

# [](#getting-started)Getting Started:
> You just installed Statefarm Client...and you're probably confused by all the tabs, sliders, & buttons.
> Below is a few basic ways to start using StateFarm.

- Press 'H' to show/hide the panel. You can also drag it by clicking & dragging `StateFarm` at the top.
- Click on various categories (combat, render, chat, etc) for different areas of cheating.
- Press 'J' to show/hide the botting panel. This allows you to use bots.

Here are some key features to learn:

### Aimbot
Aimbot is one of the key features of StateFarm, it is the most powerful combat module.<br>
To configure the aimbot, open the `Combat` tab.

- If you have an external mouse, activate `ToggleRM` to use the right side of the mouse to toggle aimbot.
- Use `Prediction` & `AntiBloom` to have better accuracy.
- If using a mouse, click the `v` key to enable & disable aimbot.
  
### ESP
Being also named `wall hacks`, these cheats allow you to see players through walls.<br>
To configure ESP, open the `Render` tab.

- To see eggs through walls with **boxes**, enable `PlayerESP`.
- To see all players easily with **lines**, enable `Tracers`.
- To see players' eggs through walls (not guns), enable `Chams`.
- To see nametags through walls, enable `Nametags`.
- You also may want to adjust your FOV with the slider. The default for Shell Shockers is **72**.

<br>

# [](#features) Features:
### Binding Modules:
With the exception of the color pickers and some links, each option should all be bindable to a key of your choice.<br>
1. Visit the upmost tab of the cheat you wish to bind.
2. Click on the `Binds` button.
3. Find the cheat name, and choose `Set Bind` to the right.
   - Some cheats already have binds. To change these, click on the preset key
4. Press the key to bind! It's that simple.
> If you want to remove a bind, press your 'Delete' key instead of a bind.

## [](#combat) Combat:
- **Aimbot** - locks onto targeted player.
  - **TargetMode** - decides the priority for which player aimbot should target.
    - **Pointing At** - closest to direction the camera is pointing.
    - **Nearest** - closest to the player in proximity.
  - **TargetVisibile** - a filter, applied after TargetMode helping to pick the aimbot target
    - **Disabled** - track the person TargetMode strictly decides
    - **Prioritise Visible** - visible players are the PRIORITY, only targets players behind walls if none are visible.
    - **Only Visible** - only targets visible players. if none are visible, nobody is targeted.
  - **ToggleRM** - modifies aimbot to only lock when the right mouse is held.
  - **SilentAim** - shoots without moving the camera. ONLY visual, VERY blatant cheating. [more information](https://youtu.be/R1NkSsi2LrI?t=20)
  - **NoWallTrack** - aimbot ignores the player if they're behind obstacles.
  - **Prediction** - predicts where the player will be when the bullet hits them.
  - **AntiBloom** - locks onto the predicted bloom point. good for shooting & moving.
  - **AntiSwitch** - prevents the aimbot from changing the target until they die.
  - **1Kill** - disables aimbot when the player dies.
  - **MinAngle** - prevents you from snapping if the angle between you and the player is greater than this value.
  - **AntiSnap** - this makes snapping smooth at higher values. useful to avoid being spotted.
  - **AntiSneak** - recommended distance under 2. this automatically kills players in this range.
  - **ESPColor** - the color used to highlight the ESP line of a targeted player. useless if PlayerESP is disabled.
- **AutoRefill** - this automatically reloads your gun if there is no more ammo.
- **SmartRefill** - this makes your weapon refill at the best moment, which reduces reload time.
- **AutoFire** - automatically shoot the gun.
- **AutoFireType** - picks how to shoot the gun
  - **Force Automatic** - changes guns which normally aren't automatic into ones that are.
  - **While Visible** - automatically shoots the gun when a player is visible.
  - **While Aimbotting** - automatically shoot the gun when you're aimbotting.
  - **When Visible + Aimbotting** - the above two things, together.
  - **Always** - forever shoot the gun like a maniac.
- **GrenadeMAX** - sets grenades to be thrown to max power immediately without the need of charging.

## [](#render) Render:
- **PlayerESP** - creates boxes around enemy players.
- **Tracers** - creates lines pointing from the center of the screen to the location of enemy players.
- **Chams** - renders players through walls.
- **Nametags** - enlarges nametags and makes them appear through walls.
- **Targets** - render a red sphere inside players that deals the most damage to them when shot.
- **Ammo ESP/Tracers options** - displays where ammo/grenades are on the map
  - **ESP** - outlines the ammo/grenades
  - **Tracers** - adds tracers like the ones with normal ESP to ammo/grenades
  - **Regime** - allows you to configure when to trace
- **FOV** - controls the FOV of the client.
- **ZoomFOV** - controls how zoomed in/out you are.
- **Wireframe** - outlines map objects to allow you to see directly though walls.
- **EggSize** - changes how big eggs are.
- **SetDetail** - changes quality of game graphics.
- **Textures** - disables some textures. primarily, the sky.
- **RenderDelay** - basically, this adds extra FPS buffer.

## [](#hud) HUD:
- **ShowBloom** - displays the next shot's bloom as a red dot onscreen.
- **Leaderboard** - highlights currently aimbotting player on the leaderboard
- **Coords** - displays current position on the map.
- **HPDisplay** - displays the health of your opponents.
- **PlayerInfo** - displays added information about the player you're targeting.
- **GameInfo** - displays extra game information.
- **ShowStream** - detects & displays ongoing twitch streamers.

## [](#chat-tab) Chat:
- **InfiniHistory** - disables the default limiting of message history.
- **HighlightTxt** - allows you to highlight text from the chat to copy somewhere else.
- **Max Ingame** - the number of messages to show ingame (if unset, infinite history will cause issues)
- **ShowFiltered** - view messages that are caught by the game filter in red.
- **BypassFilter** - bypass naughty word game message filter!
- **TallChat** - makes the chat text taller, appends a character to all sent messages.
- **AntiAFK** - prevents you from automatically leaving the lobby.
- **Spammer** - automatically send messages
  - **Delay** - the interval to send messages.
  - **Spam Text** - the message to spam.
- **Trolling**
  - **Mock** - rudely mocks people talking in chat.
  - **Announcer** - announces when you change GUI config.
  - **AutoEZ** - gloats on people when you kill them.
  - **CheatAccuse** - accuses your killer of cheating.
- **Join/Leave Messages**
  - **Join Msgs** - notify you when players join.
  - **Leave Msgs** - notify you when players leave.
  - **Send2Chat** - decides if these messages are shown to only you or everyone.
  - **[SFC]Added** - if send2chat is enabled, this will add `[SFC]` to the beginning of the join/leave messages.

## [](#list) Lists:

- **Whitelist**
  - Enter a list of names to use the below configuration. Separate with commas.
  - **WAimbot** - only will aimbot on the specified whitelist player(s). if the player(s) are all dead, you will target nothing.
  - **WESP** - a special behavior will appear to whitelisted ESP people.
    - **Highlight** - make their ESP line a special color.
    - **Only Include** - only includes their specific ESP line.
- **Blacklist**
  - Enter a list of names to use the below configuration. Separate with commas.
  - **BAimbot** - never will aimbot on the specified whitelist player(s).
  - **BESP** - a special behavior will appear to blacklisted ESP people.
    - **Highlight** - make their ESP line a special color.
    - **Just Exclude** - excludes their specific ESP line entirely.

## [](#automation) Automation:
- **FloodReport** - mass reports everyone. o7, comrade.
- **Bunnyhop** - makes you automatically bunnyhop.
- **AutoWalk** - walks forward automatically.
- **AutoStrafe** - strafes automatically.
- **AutoJump** - jumps on the specified interval (`JumpDelay`).
- **AutoWeapon** - automatically picks a weapon.
- **AutoGrenade** - automatically grenades w/ a delay.
- **AutoJoin** - automatically joins a game. use `Retrieve` to get the current game code.
- **AutoName** - automaticaly names yourself.
  - **StealName** - steals a random lobby player's name.
  - **RandomName** - gets a random shell shockers default sounding name.
- **AutoRespawn** - automatically respawn.
- **AutoTeam** - automatically picks a team.
- **GameBlacklist** - prevents you from joining specific games.
- **LeaveEmpty** - leaves empty games.
- **AutoLeave** - automatically leaves after a specified interval.
- **Gamemode** - picks a gamemode for autojoin.
- **AutoRegoin** - automatically selects a region to play in.
- **EggColor** - picks the egg color automatically.
- **AutoStamp** - picks the egg stamp automatically.
- **AutoHat** - picks the egg hat automatically.

## [](#botting) Botting:

> To open the botting panel, open it in the botting tab, or press J (default key).

### Base Instructions:
1. **Make sure you have pop-ups enabled for your website.**
   - You can see an article for Chrome [here](https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop#zippy=%2Callow-pop-ups-and-redirects-from-a-site).
2. **Configure your settings and press the Deploy button.**
   - For information on what you can configure, see below.
3. **Make sure your windows stay "focused".**
   - See setup below that keeps the windows running.
   - The windows must be partially visible to execute the needed javascript.

> An example setup. Host player is on the bottom while the bots are above, stacked so that they are all counted as "active". StateFarm will automatically arrange bots into this formation.

<img src='https://i.imgur.com/n6injUA.png' width='60%'>

<!-- doescolder cutie moment -->

### Deploy
- **BotAmount** - the number of bots/windows opened.
  - Press `Deploy` to start the bots.
- **UseNames** - use special customized names.
- **AntiDupe** - prevents duplication of names with a random letter at the end.
- **CopyNames** - copies names from other players in the lobby.
- **BotColor** - sets the egg skin color of your bots.
- **BotStamp** - sets the stamp of your bots.
- **BotHat** - sets the hat of your bots.
### Manage
- **CloseTabs** - closes all bot tabs & kills all bots.
- **Refresh** - reloads all bot tabs.
- **NewProxies** - moves bots to new proxies.
- **UnbanAll** - unbans all bots.
- **AutoUnbanBot** - automatically unbans all bots when they're banned.
- **Don'tKillMe** - forces bots to ignore you.
- **Don'tKillBot** - forces bots to ignore other bots.
- **LeaveGames** - makes all bots leave their games.
- **LeaveEmpty** - makes bots leave empty games.
- **AutoLeave** - makes bots leave after the specified interval.
- **SpamReport** - makes the bots report everyone in the lobby.
- **JoinGame** - forces bots to join a game.
- **GameCode** - the code of the game the bots will join.
  - if not specified, they'll find a random.
  - use `Retrieve` to get the current code.
- **GameType** - the game type the bots join - ffa, kotc, etc. can be random or disabled.
- **AutoRegion** - the region the bots join - use, usc, etc. can be random or disabled.
- **SelectTeam** - automatically picks the bots' teams.
### Params
- **DoPlay** - will the bots spawn?
- **LowRes** - keeps resolution of the game low, reduces resources needed.
- **RenderDelay** - adds a forced fps buffer, makes game laggier.
- **MuteGame** - shuts the game up.
- **DoSeizure** - will the bots enable seizure mode?
- **DoTallChat** - enables the Tall Chat module for bots.
- **DoMock** - makes the bots mock chatting players.
- **DoAutoEZ** - makes the bots gloat about their kills.
- **DoChAccuse** - makes the bots accuse their killers when dying.
- **DoSpam** - makes the bots spam. 
- **SelectWeapon** - makes the bots pick a weapon.
- **DoMove** - makes the bots move around.
- **DoShoot** - makes the bots shoot.
- **DoAimbot** - makes the bots have aimbot.

> The Info tab will display information about the bots.

## [](#themeing) Theming:
- **Mute Game** - mute the game?
- **DistanMult** - makes the distance when playing sfx change.
- **CustomSFX** - uses custom SFX packages.
- **ReplaceLogo** - replaces shell shockers' logo with the StateFarm logo.
- **AnimateTitle** - makes the page title look cool.
- **Theme** - controls the UI theme.

## [](#misc) Miscellaneous:
- **Ad Block** - prevents the anti-adblocker code.
- **VIP Spoof** - makes you look like a VIP locally (other players won't see).
- **UnlockSkins** - unlocks all skins in locally (other players will not see these).
- **AdminSpoof** - shows admin options such as `BOOT` and `BAN` in games. no ACTUAL functionality.
- **Unban** - unbans you by signing out. you will lose skins if you're not signed in.
- **AutoUnban** - automatically detects bans & unbans in above fashion.
- **NewProxy** - switches to a new shell shockers link. SF config won't be transferred.
- **ReloadPage** - reloads the page.
- **SwitchFocus** - controls the focus of the game.
- **RandomPath** - forces a new random path (pathfinding currently disabled).

## [](#client-&-about) Client & About:
- **HideGUI** - hides the big StateFarm menu. default key to do this is `H`.
- **Popups** - disables/enables bottom-left corner popups of configs changed & notifications.
- **Panic** - allows you to quickly exit to a set URL. great for hacking in class.
- **Presets**
  - **Preset List** - pick a preset from the dev team & apply it to get custom settings from us.
  - **Save** - saves your current settings as a preset.
  - **Delete** - deletes a preset.
  - **Import** - imports a custom preset.
  - **Export** - copies your current preset to the clipboard.
- **Reset** - powerwashes StateFarm completely.

<br>

# [](#adblocking)Adblocking
> Ads are quite an annoying feature. Use the steps below to add a good ad-blocker.<br>
> Use the 'Ad Block' feature in the Misc tab to disable Ad Blocker detection.<br>
> This is unspecific to StateFarm Client but is here as a helpful tip for general user experience improvement.

**Procedure:**
1. Install [uBlock Orgin](https://ublockorigin.com/) - the best adblocker.
    - **uBlock Origin** is NOT **uBlock**. They are **different**.
2. Enable uBlock Origin. That's it. No more ads.

<br>

# [](#issues-and-troubleshooting)Issues and Troubleshooting

|       Known Issues         |  Solution                                                |
|----------------|---------------------------------------------|
|Stuck on loading screen|Press CTRL+F5 (or FN+F5) until "Script Injected" is shown.|

> If you have any issues, feel free to contact us in our [Discord server](https://dsc.gg/sfnetwork).

<br>

# [](#credits-and-disclaimer)Credits & Disclaimer

- **Hydroflame521** - the man who started StateFarm client, a heavy contributor of code.
- **onlypuppy7**, **porcupane**, & **not_food** - the main developers of StateFarm client.
- **de_Neuublue**, **OakSwingZZZ** and **1ust** - contributed to code in StateFarm client.
- **susdung** - made the visuals improved on StateFarm client.
<!-- **Zertalious** - old code in old versions. -->
<!-- oops i commented this out! what a horrible mistake! someone should really fix this idk... -->

<br>

**StateFarm Client is a powerful tool, but like any powerful tool, it can have unintended consequences. We urge you to consider these points before using it:**
- Social Impact: StateFarm Client's functionalities may negatively impact your relationships. Using it excessively could lead to lost friendships, damaged reputations, and social isolation.
- Public Perception: Using StateFarm Client in public lobbies is highly discouraged. It can cause frustration and hostility among others, potentially leading to bans and loss of in-game progress. Be respectful of shared spaces and avoid actions that disrupt others' experiences.
- Loss of Progress: Your usage of StateFarm Client may cause you to lose all of your in-game progress such as "skins", "eggs", or VIP status. You may also be banned in game, which is not our concern.

Remember, be safe & wise on the internet.
