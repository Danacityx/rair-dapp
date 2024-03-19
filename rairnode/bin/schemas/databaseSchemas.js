const Joi = require('joi');
const { ethAddress, blockchainNetworks, ethTransaction, mongoId } = require('./reusableCustomTypes');

module.exports = {
    dbSettings: () => ({
        onlyMintedTokensResult: Joi.boolean(),
        demoUploadsEnabled: Joi.boolean(),
        featuredCollection: mongoId,
        nodeAddress: ethAddress,
        superAdmins: Joi.array().items(ethAddress),
        darkModePrimary: Joi.string(),
        darkModeSecondary: Joi.string(),
        darkModeText: Joi.string(),
        buttonPrimaryColor: Joi.string(),
        buttonFadeColor: Joi.string(),
        buttonSecondaryColor: Joi.string(),
        superAdminsOnVault: Joi.boolean(),
    }),
    dbSettingsFiles: () => ({
        darkModeBannerLogo,
        darkModeMobileLogo,
        lightModeBannerLogo,
        lightModeMobileLogo
    }),
    dbContracts: () => ({
        title: Joi.string(),
        user: ethAddress,
        blockchain: blockchainNetworks,
        contractAddress: ethAddress,
        diamond: Joi.boolean(),
        creationDate: Joi.date(),
        transactionHash: ethTransaction,
        lastSyncedBlock: Joi.string(),
        external: Joi.boolean(),
        singleMetadata: Joi.boolean(),
        metadataURI: Joi.string(),
        importedBy: ethAddress,
        blockSync: Joi.boolean(),
        blockView: Joi.boolean(),
    }),
    dbProducts: () => ({
        name: Joi.string(),
        collectionIndexInContract: Joi.string(),
        contract: mongoId,
        copies: Joi.number(),
        soldCopies: Joi.number(),
        sold: Joi.boolean(),
        royalty: Joi.number(),
        firstTokenIndex: Joi.string(),
        cover: Joi.string(),
        creationDate: Joi.date(),
        transactionHash: ethTransaction,
        diamond: Joi.boolean(),
        singleMetadata: Joi.boolean(),
        metadataURI: Joi.string(),
    }),
    dbTokens: () => ({
        token: Joi.string(),
        uniqueIndexInContract: Joi.string(),
        ownerAddress: Joi.string(),
        offerPool: Joi.string(),
        offer: Joi.string(),
        contract: mongoId,
        metadataURI: Joi.string(),
        authenticityLink: Joi.string(),
        isMinted: Joi.boolean(),
        isMetadataPinned: Joi.boolean(),
        isURIStoredToBlockchain: Joi.boolean(),
        creationDate: Joi.date(),
        product: Joi.string(),
    }),
    dbOffers: () => ({
        offerIndex: Joi.string(),
        contract: mongoId,
        product: Joi.string(),
        offerPool: Joi.string(),
        copies: Joi.number(),
        soldCopies: Joi.number(),
        sold: Joi.boolean(),
        price: Joi.string(),
        range: Joi.array().items(Joi.string()).max(2),
        offerName: Joi.string(),
        creationDate: Joi.date(),
        diamond: Joi.boolean(),
        diamondRangeIndex: Joi.string(),
        transactionHash: ethTransaction,
    }),
    dbResales: () => ({
        tokenContract: mongoId,
        tokenIndex: Joi.number(),
        price: Joi.number(),
        buyer: ethAddress,
        seller: ethAddress,
    }),
    dbRoyalties: () => ({
        contract: mongoId,
        recipients: Joi.number(),
        remainderForSeller: Joi.number(),
    }),
    dbFiles: () => ({
        _id: mongoId,
        author: ethAddress,
        uploader: ethAddress,
        title: Joi.string(),
        description: Joi.string(),
        // Blockchain data
        contract: mongoId,
        product: Joi.string(),
        offer: Joi.array().items(Joi.string()),
        // Extra data
        category: mongoId,
        demo: Joi.boolean(),
        ageRestricted: Joi.boolean(),
        hidden: Joi.boolean(),
    }),
};
