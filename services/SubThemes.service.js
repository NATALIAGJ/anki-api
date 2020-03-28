const { ObjectId } = require('mongodb');
const SubThemeSchema = require('../models/SubTheme.model');

class SubThemesService {
    async getSubThemes({ tags }) {
        const query = tags;
        const subThemes = await SubThemeSchema.find(query).populate('theme');
        return subThemes || [];
    }

    async getSubTheme({ subThemeId }) {
        const subTheme = await SubThemeSchema.findOne({ _id: ObjectId(subThemeId) });
        return subTheme || {};
    }

    async createSubTheme({ subTheme }) {
        const createSubTheme = await SubThemeSchema.create(subTheme);
        return createSubTheme;
    }

    async updateSubTheme({ subThemeId, subTheme }) {
        const updateSubTheme = await SubThemeSchema.updateOne(
            { _id: ObjectId(subThemeId) },
            { $set: subTheme }
        );
        return updateSubTheme;
    }

    async deleteSubTheme({ subThemeId }) {
        const deletedSubTheme = await SubThemeSchema.deleteOne({ _id: ObjectId(subThemeId) });
        return deletedSubTheme;
    }
}

module.exports = SubThemesService;
