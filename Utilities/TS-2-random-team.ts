export const teamName = `team ${Math.floor(Math.random() * 100000)}`;

export const adminPassowrd = `4HQwARpqZ4:i7aB`;

export const password = `test-play-1`;

const isolatedEmailDomain = `play-isolated-${Math.floor(Math.random() * 1000000000)}.invalid`;

export const microsoftUsers = {
    //TC-113 AI Studio Monitor
    //TC-200 Documentation - Search document
    //TC-189 Documentation - Build a Knowledge Base
    //TC-199 Admin Section - Validation
    //TC-187 Admin Section - Assertion
    //TC-58 Account & Settings - Credit
    //TC-109 Credit Transfer
    //TC-170 Workspace Change Validation
    "aistudio_user_2": `gamev24783@playfine.com`, // admin account used in above TCs
    "aistudio_user_3": "aistudio03@outlook.com", // workspace change validation
    "aistudio_user_4": "cojiki4586@ofags.com", //TC-224 BYOK-Create-Edit-Delete
    "user_6": "test-play-6@play-isolated-7f3c9a.invalid", //TC-103 Agent-Create-Delete
    "user_7": `kanokim415@goldvester.com`, //TC-28 Create Duplicate
    "user_8": "test-play-8@outlook.com", //TC-138 KB to BP creation validation
    "user_9": "sijahek661@en2ch.com", //TC-30 Folder-Create-Delete
    "user_10": "test-play-10@outlook.com", //TC-101 KnowledgeBase-Create-Delete
    "user_11": "sobiyag890@en2ch.com", //TC-100 Runlist-Create-Delete
    "user_12": "test-play-12@outlook.com", //TC-99 Team-Create-Delete
    "user_13": "tomayev224@playfine.com", //TC-98 Test case-Create-Delete
    "user_14": "test-play-14@mailinator.com", //TC-97 Typescript-Create-Delete
    "user_15": "test-play-15@outlook.com", //TC-132 Invite to new user from top banner without adding to workspace
    "user_16": "Lema.Sailors@FusionInbox.com", //TC-137 Import-export tests
    "user_17": "garafe2509@en2ch.com", //TC-41 Invitation to already existing user
    "user_18": "Elius.Mauricio@FusionInbox.com", //TC-174 Seach Assest
    "user_19": "test-play-19@mailinator.com", //TC-136 Category
    "user_20": `ripihe1705@hiringview.com`, //TC-53 Environment
    "user_21": "hifalof578@emailkeep.com", //TC-55 Source control
    "user_22": "test-play-22@outlook.com", //TC-247 Create Custom adapter
    "user_23": "Adyanna.Vargus@FusionInbox.com", //TC-177 Secret
    "user_24": "test-play-24@outlook.com", //TC-133 Tag
    "user_25": "test-play-25@outlook.com", //TC-142 Empty trash can
    "user_26": "test-play-26@outlook.com", //TC-144 Delete multiple
    "user_27": "sayawa9816@playfine.com", //TC-141 Restore & delete permanently
    "user_28": "seheya1228@en2ch.com", //TC-235 Logout Validation
    "user_29": "jicigo2229@emailkeep.com", //TC-238 Add Category to a test case
    "user_30": "test-play-30@play-isolated-7f3c9a.invalid", //TC-178 Record TC-RL-Add tag-Run RL- Validate RL Run
    "user_31": `rifehe6539@goldvester.com`, //TC-142 Schedule RL
    "user_32": "test-play-32@outlook.com", //TC-236 Add tag to a test case
    "user_33": "test-play-33@outlook.com", //TC-229 Record a test case
    "user_34": "test-play-34@play-isolated-7f3c9a.invalid", //TC-223 Workspace Settings page
    "user_35": "yotefej222@macsnipe.com", //TC-176 Adapter
    "user_38": "binilov241@hopefunder.com", //TC-163 File-Create-Delete
    "user_43": `yexijoh625@hiringview.com`, //TC-40 import playwright
    "user_40": "test-play-40@outlook.com", //TC-170 Workspace Change Validation
    "user_41": "tepabe5924@digeros.com", //TC-57 Account & Settings - Audit Log
    "user_45": "test-play-45@mailinator.com", //TC-193 LLM Command Test
    "user_49": "gahok40050@en2ch.com", //TC-42 Invite to a new user from team settings
    "user_50": "test-play-50@outlook.com", //TC-219 KB with git
    "user_51": "test-play-51@outlook.com", //TC-240 Navigate to Play landing page,
    "user_52": "test-play-52@play-isolated-7f3c9a.invalid", //TC-251 External Adapter      Note: Don't use it for other test case
    "user_53": "xocam10455@boffweb.com", //TC-287 Add settings in team
    "user_55": "hoyeka8846@playfine.com", //TC-252 Copy paste            Note: Don't use it for other test case
    "user_56": "yovagi6041@emailkeep.com", //TC-123 Playwright)modify-ExecuteTC
    "user_57": "test-play-57@play-isolated-7f3c9a.invalid", //TC-291 Git connecter
    "user_58": "test-play-58@outlook.com", //TC-297  Update "Delete" Action to "Remove from Team" for Team Members
    "reg_1": `ridel19884@goldvester.com`, //TC-117 Context menu of a step
    "reg_2":"regression_user@outlook.com", //TC-234 Run execution cleanup after recorder starts
    "reg_3": "regression_kd_1@play-isolated-7f3c9a.invalid",  // TC-290 CRUD TC Status
    "reg_10": "regression-user-10@outlook.com", //TC-296 Display User Name as Owner and Fallback to Email When User Name Is Unavailable
    "reg_12": `costanza.bury@fusioninbox.com`, // TC-305 Import test case using file
    "reg_13": "regression-user-jp-6@mailinator.com", //TC-306 Edit playwright step using chat
    "reg_11": `wimaw80020@goldvester.com`, // TC-139 Import playwright from file
    "user_61":"test-play-61@outlook.com", //TC-148 Empty trash can
    "user_36":"test-play-36@testShivani.com", //TC-309 Xpath Execution
    "user_68": "Tyerra.Corona@FusionInbox.com", // TC-158 Secret Name
    "user_54": "monanig245@drtall.com", // TC-175 Team                 Note: Don't use it for other test case
    "user_59": "mofica1084@drtall.com", // TC-175 Team                 Note: Don't use it for other test case
    "user_47": `hekiwa4699@hiringview.com`, // TC-172 Workspace users tab   Note: Don't use it for other test case
    "user-37": "test-play-37@outlook.com", //TC=235 Xpath Execuion with variables
    "user-42": "test-play-42@outlook.com", //TC-236: Team self heal settings
    "user_65": "koyicar122@digeros.com", // TC-337 Timeout
    "user_69": "test-play-69@outlook.com", // TC-184 Self heal variables
    "user_70": "test-play-70@outlook.com", // TC-46 LLM chat working
    "user_66": "test-play-66@outlook.com", // TC-197 Excel file upload
    "user_72": "pepito4562@playfine.com", //TC-203 Enable LLM Over Native Recorder
}

export const passwords = {
    "aistudio_user_2": "test-play-1",
    "aistudio_user_3": "Hello@789",
    "aistudio_user_4": "5@Dummyy",
    "pwd_user_08": "test-play-08",
    "user_72": "Leapwork@2026",
    "user_17": "Test@123456", //user_49, 55, 56
}