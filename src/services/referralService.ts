import Referral, { IReferral } from "../models/Referral";

export const postReferral = async (referralData: IReferral) => {
    try {
        const newReferral = await Referral.create(referralData);
        return { success: true, data: newReferral };
    } catch (error) {
        console.error('Error creating referral:', error);
        return { success: false, error: 'Failed to create referral' };
    }
};

export const getRefferalsByUserId = async (userId: string) => {
    try {
        const referrals = await Referral.find({ gpId: userId }).populate('specialistId', 'name email').exec();
        return { success: true, data: referrals };
    } catch (error) {
        console.error('Error fetching referrals:', error);
        return { success: false, error: 'Failed to fetch referrals' };
    }
}

export const getReferralById = async (referralId: string) => {
    try {
        const referral = await Referral.findById(referralId).populate('specialistId', 'name email').exec();
        return { success: true, data: referral };
    } catch (error) {
        console.error('Error fetching referral:', error);
        return { success: false, error: 'Failed to fetch referral' };
    }
};


