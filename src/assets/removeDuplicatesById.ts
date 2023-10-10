import {VolumeInfo} from "../types/types";

export default function removeDuplicatesById(arr: VolumeInfo[]):VolumeInfo[] {
    const uniqueIds: Record<string, boolean> = {};
    return arr.filter((item) => {
        if (!uniqueIds[item.id]) {
            uniqueIds[item.id] = true;
            return true;
        }
        return false;
    });
}