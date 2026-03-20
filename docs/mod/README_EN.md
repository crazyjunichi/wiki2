# 📚 Welcome to WikiMod

## How to Use
Install BepInEx and place WikiMod.dll in the Plugin folder.
After entering the game, you can enable or disable the main mod features from the game’s Settings menu.

## Latest Update V2.2 [2026/03/20]
- [Detail Tooltip] Shows unlock conditions for locked cards
- [Detail Tooltip] Shows reasons for paused conversions
- [Detail Tooltip] Shows liquids inside containers
- [Detail Tooltip] Shows compound statuses related to status effects
- [Detail Tooltip] Displays status phase change duration
- [Detail Tooltip] Syncs food score with game algorithm, temporarily fixing incorrect scoring for seasoned food
- [Detail Tooltip] Supports displaying card creation time (can be enabled in advanced settings)
- [Detail Tooltip] Fixed incomplete status effect display
- [Detail Tooltip] Optimized quality calculation formula display
- Build Tool can rename rooms, automatically updating the room's main card name and all door names leading to the room
- Added option to show Detail Tooltip only when holding CTRL
- Extended 6-hour light sleep option to various bed types
- Added more error tolerance for better compatibility with other mods
- Fixed blueprint requirement hints including unavailable items

## ✨ Main Features

### 📖 Built-in WIKI
Click the question mark on most interfaces to open the built-in wiki.
- Shows commonly used information
- Mod-compatible (can display mod card info)

### 🗺️ Game Map
Press `M` in any in-game interface to open the map.
A simplified nearby map is shown in the exploration interface.

#### 🌍 Outdoor Map
- Shows locations of home, farms, traps, and wild animals
- Shows landmarks, plants/animals, and explorable items for each location
- Shows detailed farm/trap status, such as crop maturity and trap trigger state
- Shows built roads
- Shows hunting fences
- Shows animal burrows (fox dens, badger dens)
- Shows caves and carcasses
- Shows animal heatmap. Hover an animal icon to see its common routes; higher frequency appears redder.
- Click the map to move directly to destination, with support for auto-stop when encountering animals.

#### 🏢 Indoor Map
- Shows multi-floor room structure
- Shows items in each room
- Click room to move quickly

### 🌱 Highlight Crop Status
- Displays water/fertilizer/acidity/soil quality of farms and gardens as progress bars
- Shows safe ranges for each attribute

### 🔔 Alerts
- Alert when animals are about to pass by
- Alert when traps are triggered
- Custom alerts

### 📊 Advanced Character Info Panel
- Press `C` to open
- Overview: shows character info, game records, common statuses, perks
- Equipment: grouped by body part, supports unequip/equip; shows related status effects
- Wounds: grouped by body part; shows related status effects
- Magic: shows current magic equipment, current status bonuses, related status effects
- Skills: categorized display; shows combat move unlock progress
- Physique: shows physical attributes and related effects
- Mind: shows mental status and related effects
- Digestion: shows digestive system status and related effects
- Infection: shows various infection statuses and related effects
- Chemistry: shows various compound/chemical statuses and related effects

### 🔢 Full Detail Tooltip
- Hover to view related values for cards, statuses, perks, and action buttons
- Correctly displays trap chance, action conditions, food score, etc.

### 🔍 Quick Find
- Press `Alt` to open
- Supports Chinese, pinyin, and initials for search
- In scene view, defaults to searching scene items and jumping to them (including in containers, blueprints, and equipment)
- In blueprint view, search and jump to target blueprints
- In map view, search tags and drops, and highlight matched maps.

### ⚙️ Anything Mod
Press ` (the key below ESC) to activate.
This feature is disabled by default and can be enabled from options.

- Search any in-game data
- Get any item with custom stats and enchantments
- Modify any data on existing cards
- View/modify any status and clear staleness
- View/modify NPC status and move NPC near player
- Adjust global rates: blueprint research time / food spoilage speed / skill staleness / animal respawn speed / farm growth speed / garden growth speed / crop Product / garden product / map environment capacity / encounter difficulty
- Fast build and move tools
- Add or remove character perks after game start
- Force complete quests
- More experimental features

### ⚡ Quick Add Items
In blueprint/container slot UI, right-click to open menu and quickly add available items.
- Can display item attributes
- Can sort by attribute preference, e.g. prioritize high-quality items

### 📈 Useful Information Display
- Current season, date, and total survival time
- Current temperature
- Current moon phase
- Weather forecast
- Weight info
- Blueprint info
- Salad score
- Highlight crop status

### 🏷️ More Useful Features

- Support renaming almost all cards
- Can add 6-hour sleep option in rest interface (duration adjustable in advanced settings)
- Hold CTRL + click the arrow on a card to move the whole stack
- Support displaying card attribute change arrows
- Support optimizing default card placement on the ground
- Support disabling animal tracks/blood trails
- Show critical marker on weight progress bar


## 📝 Changelog

### 2.2
- [Detail Tooltip] Shows unlock conditions for locked cards
- [Detail Tooltip] Shows reasons for paused conversions
- [Detail Tooltip] Shows liquids inside containers
- [Detail Tooltip] Shows compound statuses related to status effects
- [Detail Tooltip] Displays status phase change duration
- [Detail Tooltip] Syncs food score with game algorithm, temporarily fixing incorrect scoring for seasoned food
- [Detail Tooltip] Supports displaying card creation time (can be enabled in advanced settings)
- [Detail Tooltip] Fixed incomplete status effect display
- [Detail Tooltip] Optimized quality calculation formula display
- Build Tool can rename rooms, automatically updating the room's main card name and all door names leading to the room
- Added option to show Detail Tooltip only when holding CTRL
- Extended 6-hour light sleep option to various bed types
- Added more error tolerance for better compatibility with other mods
- Fixed blueprint requirement hints including unavailable items

### 2.1
- Added Environment Settings to adjust some global rates in-game. (Entry: Anything Mod -> World Environment Settings)
- Added Move Tool to migrate any object (including rooms) on current map to other maps in one click. (Entry: Anything Mod -> Move Tool)
- Added Build Tool to quickly build rooms, expand rooms, remodel rooms, and add furniture. (Entry: Anything Mod -> Build Tool)
- Added cave and carcass icons on map
- Added map capacity display on map UI and scene card tooltips
- Added 6-hour snooze option in rest interface with configurable duration
- Added mod introduction panel
- Added version compatibility check
- Fixed incorrect prompt display for actions such as fishing
- Fixed incorrect prompt display for forest beast encounters
- Fixed crop progress bars affecting card dragging

### 2.0
- Brand-new numeric tooltip display (covers more scenes and more data). By default this overrides other tooltip mods and can be disabled in settings.
- Added Quick Find feature. Supports searching current map cards, target blueprints, and related maps
- Map now supports hunting fences, animal burrows, and animal heat areas
- Added crop status progress bars and safety thresholds
- Added critical marker on weight progress bar
- Anything Mod now supports changing save mode (Safe / Checkpoint / Realistic)
- Added shortcut key customization for Anything Mod features
- Fixed unreasonable auto-pathing routes on map UI.

### 1.5
- Advanced character info page (press `C`)
- Support renaming all cards
- Show moon phase
- Fixed incorrect animal track toggle
- Fixed issue where modifier could not enchant items
- Fixed field compatibility issues with game version 0.58

### 1.4
- Support detailed encounter logs (off by default)
- Support disabling animal tracks (off by default)
- Support loading wiki Chinese translation patch
- Added dedicated toggle for inactive NPC display on map
- Anything Mod supports editing avatar nickname
- Correctly display max carry weight
- Added focus/delete by card type
- Fixed error when opening Anything Mod if card does not exist
- Fixed occasional blueprint display issues

### 1.3
- Added card stat-change arrow indicators
- Added scene carry-weight display
- Fixed save issue caused by teleport
- Fixed inability to disable trap alarms

### 1.2
- Added alerts (animal incoming alert, trap triggered alert) (off by default)
- Added auto card placement on card entry (off by default)
- Added Ctrl + click arrow to move whole stack
- Indoor map supports click-to-move by room
- Anything Mod updates:
    - Support modifying/deleting card instances (must be enabled in Settings -> Experimental Features)
    - Support sorting on-field cards (must be enabled in Settings -> Experimental Features)
    - Support force-completing quests (must be enabled in Settings -> Experimental Features)
    - Support teleport from map UI (must be enabled in Settings -> Experimental Features)
    - Support perk removal
    - Support custom alerts
    - Support pinning entries to Anything home
    - Fixed inability to modify statuses

### 1.1.0
- Added Anything Mod
- Optimized map, added cave map jump, and detailed trap/crop status display
- Added blueprint info display

### 1.0.6
- Move directly to destination from map
- Show NPC respawn time
- Adjusted sun/moon/stars
- Show weather forecast
- Show weight info

### 1.0.4
- Support official map data
- Map displays detailed animal data and behavior preview
- Optimized date display
- Show detailed temperature info
- Optimized indoor map display

### 1.0.3
- Added quick add item feature
- Added mod settings
- Added food score display
- Indoor map can switch to outdoor map

### 1.0.2
- Added indoor map
- Compatible with CSTI; built-in wiki supports mods
- Added material hints on blueprint UI
- Added date/temperature hints
- Fixed incorrect zoom in exploration map
- Adjusted part of color scheme

### 1.0.1
- Added display for triggered traps / mature fields
- Fixed incorrect display on paved areas

### 1.0.0
- Press M to open in-game map
- Added built-in wiki on card/status detail pages
- Added nearby map display in exploration interface
