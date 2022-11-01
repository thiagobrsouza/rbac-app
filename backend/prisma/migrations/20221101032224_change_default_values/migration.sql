-- AlterTable
ALTER TABLE `profiles` MODIFY `createEditUser` BOOLEAN NULL DEFAULT false,
    MODIFY `editUserPassword` BOOLEAN NULL DEFAULT false,
    MODIFY `viewUserDetails` BOOLEAN NULL DEFAULT false,
    MODIFY `listAllUsers` BOOLEAN NULL DEFAULT false,
    MODIFY `listAllProfiles` BOOLEAN NULL DEFAULT false,
    MODIFY `createEditProfile` BOOLEAN NULL DEFAULT false,
    MODIFY `viewProfileDetails` BOOLEAN NULL DEFAULT false;
