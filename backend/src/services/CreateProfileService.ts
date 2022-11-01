import { prisma } from "../prismaClient";

interface ProfileRequest {
  name: string;
  createEditUser?: boolean;
  editUserPassword?: boolean;
  viewUserDetails?: boolean;
  listAllUsers?: boolean;
  listAllProfiles?: boolean;
  createEditProfile?: boolean;
  viewProfileDetails?: boolean;
}

export class CreateProfileService {

  async execute(createProfile: ProfileRequest) {
    const profileExists = await prisma.profile.findUnique({
      where: { name: createProfile.name }
    });

    if (profileExists) {
      throw new Error('Profile name already exists');
    }

    const profile = await prisma.profile.create({
      data: { ...createProfile }
    });
    
    return profile;
  }

}