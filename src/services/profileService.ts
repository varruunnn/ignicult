import { ProfileData } from '../types/profile';
import { mapApiDataToProfileData } from '../utils/dataMappers';

export const fetchProfileData = async (userId: string): Promise<ProfileData> => {
  try {
    const response = await fetch(`https://ignicult.com/api/metrics/user/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch profile data: ${response.status}`);
    }
    
    const data = await response.json();
    return mapApiDataToProfileData(data);
  } catch (err) {
    console.error("Error fetching profile data:", err);
    throw err;
  }
};