const spawnSync = require("child_process").spawnSync;
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1mQzNsWS1kbzhBQTVtVFl0cmdPQTN0YU9RTSIsImtpZCI6Ii1mQzNsWS1kbzhBQTVtVFl0cmdPQTN0YU9RTSJ9.eyJjbGllbnRfaWQiOiJzbWFydGZhY2VfcG9ydGFsX2NsaWVudF9pZCIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInBob25lIiwicmVhbF9lbWFpbCIsInJvbGVzIiwicGVybWlzc2lvbiIsImFkZHJlc3MiLCJvd25lciIsImxpY2Vuc2UiLCJwb3J0YWxfYXBpIiwiaWRlbnRpdHlfYXBpIiwiZW50ZXJwcmlzZV9hcGkiLCJ3bXNfYXBpIiwiY2xvdWRfaWRlIiwic3NoIl0sInN1YiI6IjJmNDlkOTYxLTM1NTUtNGE5Ni04ZjVlLTAyY2QxODgzNTNkNSIsImFtciI6WyJwYXNzd29yZCJdLCJhdXRoX3RpbWUiOjE1MTk4ODAyNjcsImlkcCI6Imlkc3J2IiwiaXNzIjoiaHR0cHM6Ly9pZC5zbWFydGZhY2UuaW8vaWRlbnRpdHkiLCJhdWQiOiJodHRwczovL2lkLnNtYXJ0ZmFjZS5pby9pZGVudGl0eS9yZXNvdXJjZXMiLCJleHAiOjE1MTk5NTIyNjgsIm5iZiI6MTUxOTg4MDI2OH0.JSFi_NhKv4yB2-inv9SkXfx_-zRVxoFhrMeg-wvnuJ9u8MmrUtZMU0G-ePMNxqB5RdsP7Q-nUGp7mCofK3YjxtEVfGSS8YB7e_C5IVmCVQ_AshXkzXPYF4em4yYOxqAgPo5i7qyyWOjgD0fva2SasDixZYSO-JAAeZ4xmlTvf018S03Rmv8pAuNdZmYlipsUg4MZprfBuIgi31Cv0vLiFk24j0C9cfNOn-74lig2CI4c6aVXMDieEd55eCh8XZFc4TrTtASb5zvFqEAPhhadjFQzdn7Px9oYzQ3_6nN8Oyhwl8nWLeeK_ysBIEGHLoLVEYwb9k0Z27xd09mckj-1Rg";
const execPath = "/home/ubuntu/workspace/node_modules/.bin/smfc";
const params = [
    "--projectRoot", "/home/ubuntu/workspace",
    "--task", "storeSubmission:iOS",
    "--licenseFile", "/home/ubuntu/workspace/output/.license.xml",
    "--logStdOut", "1",
    "--logLevel", "error",
    "--logFile", "output/publish-error.log",
    "--token", "Bearer " + TOKEN,
    "--provisioningProfileID", "706"
    ];
spawnSync(execPath, params, {stdio: "inherit"});
