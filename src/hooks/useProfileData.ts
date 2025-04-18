// src/hooks/useProfileData.ts

import { useState, useEffect } from 'react';
import { ProfileData, defaultProfileData } from '../types/profile';
import { fetchProfileData } from '../services/profileService';

interface UseProfileDataResult {
  profileData: ProfileData;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProfileData = (userId: string): UseProfileDataResult => {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!userId) {
      setError("No user ID provided");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchProfileData(userId);
      setProfileData(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error in useProfileData:", err);
      setError("Failed to load profile data. Please try again later.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return {
    profileData,
    isLoading,
    error,
    refetch: fetchData
  };
};