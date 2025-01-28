import type { DefaultTranslationsObject, Language } from '../types.js'

export const caTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Compte',
    accountOfCurrentUser: 'Usuari actual',
    accountVerified: 'Compte verificat',
    alreadyActivated: 'Ja activat',
    alreadyLoggedIn: 'Ja has iniciat sessió',
    apiKey: 'Clau API',
    authenticated: 'Autenticat',
    backToLogin: "Tornar a l'inici de sessió",
    beginCreateFirstUser: 'Comença a crear el primer usuari',
    changePassword: 'Canviar contrasenya',
    checkYourEmailForPasswordReset:
      "Si l'adreça de correu electrònic està associada amb un compte, rebràs instruccions per restablir la teva contrasenya aviat. Si no trobes el correu electrònic a la safata d'entrada, revisa la carpeta de correu brossa o no desitjat.",
    confirmGeneration: 'Confirmar generació',
    confirmPassword: 'Confirma la contrasenya',
    createFirstUser: 'Crea el primer usuari',
    emailNotValid: 'El correu electrònic proporcionat no és vàlid',
    emailOrUsername: "Correu electrònic o nom d'usuari",
    emailSent: 'Correu electrònic enviat',
    emailVerified: 'Correu electrònic verificat amb èxit.',
    enableAPIKey: 'Habilitar clau API',
    failedToUnlock: "No s'ha pogut desbloquejar",
    forceUnlock: 'Forçar desbloqueig',
    forgotPassword: 'Has oblidat la contrasenya',
    forgotPasswordEmailInstructions:
      'Si us plau, introdueix el teu correu electrònic a continuació. Rebràs un correu electrònic amb instruccions sobre com restablir la teva contrasenya.',
    forgotPasswordQuestion: 'Has oblidat la contrasenya?',
    forgotPasswordUsernameInstructions:
      "Si us plau, introdueix el teu nom d'usuari a continuació. Les instruccions per restablir la contrasenya s'enviaran al correu electrònic associat amb el teu nom d'usuari.",
    generate: 'Generar',
    generateNewAPIKey: 'Generar una nova clau API',
    generatingNewAPIKeyWillInvalidate:
      'Generar una nova clau API <1>invalidarà</1> la clau anterior. Estàs segur que vols continuar?',
    lockUntil: 'Bloqueja fins',
    logBackIn: 'Tornar a iniciar sessió',
    loggedIn: 'Per iniciar sessió amb un altre usuari, primer <0>tanca la sessió</0>.',
    loggedInChangePassword:
      'Per canviar la teva contrasenya, ves al teu <0>compte</0> i edita la contrasenya allà.',
    loggedOutInactivity: 'Has estat tancat la sessió per inactivitat.',
    loggedOutSuccessfully: 'Has tancat la sessió amb èxit.',
    loggingOut: 'Tancant la sessió...',
    login: 'Inicia sessió',
    loginAttempts: "Intents d'inici de sessió",
    loginUser: 'Inicia sessió amb un usuari',
    loginWithAnotherUser: 'Per iniciar sessió amb un altre usuari, primer <0>tanca la sessió</0>.',
    logOut: 'Tanca la sessió',
    logout: 'Tancar sessió',
    logoutSuccessful: 'Sessió tancada amb èxit.',
    logoutUser: "Tanca la sessió de l'usuari",
    newAccountCreated:
      'S\'ha creat un nou compte per a tu per accedir a <a href="{{serverURL}}">{{serverURL}}</a>. Si us plau, fes clic en el següent enllaç o enganxa l\'URL a continuació al teu navegador per verificar el teu correu electrònic: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Després de verificar el teu correu electrònic, podràs iniciar sessió amb èxit.',
    newAPIKeyGenerated: "S'ha generat una nova clau API.",
    newPassword: 'Nova contrasenya',
    passed: 'Autenticació superada',
    passwordResetSuccessfully: 'Contrasenya restablerta amb èxit.',
    resetPassword: 'Restablir contrasenya',
    resetPasswordExpiration: 'Caducitat del restabliment de contrasenya',
    resetPasswordToken: 'Token de restabliment de contrasenya',
    resetYourPassword: 'Restableix la teva contrasenya',
    stayLoggedIn: 'Roman connectat',
    successfullyRegisteredFirstUser: 'Primer usuari registrat amb èxit.',
    successfullyUnlocked: 'Desbloquejat amb èxit',
    tokenRefreshSuccessful: 'Actualització del token amb èxit.',
    unableToVerify: "No s'ha pogut verificar",
    username: "Nom d'usuari",
    usernameNotValid: "El nom d'usuari proporcionat no és vàlid",
    verified: 'Verificat',
    verifiedSuccessfully: 'Verificat amb èxit',
    verify: 'Verificar',
    verifyUser: 'Verificar usuari',
    verifyYourEmail: 'Verifica el teu correu electrònic',
    youAreInactive:
      "Fa una estona que no estàs actiu i aviat se't tancarà la sessió automàticament per la teva pròpia seguretat. Vols romandre connectat?",
    youAreReceivingResetPassword:
      "Estàs rebent aquest correu perquè tu (o algú altre) has sol·licitat el restabliment de la contrasenya del teu compte. Si us plau, fes clic en el següent enllaç o enganxa'l al teu navegador per completar el procés:",
    youDidNotRequestPassword:
      'Si no has sol·licitat això, ignora aquest correu i la teva contrasenya romandrà inalterada.',
  },
  error: {
    accountAlreadyActivated: 'Aquest compte ja ha estat activat.',
    autosaving: "Hi ha hagut un problema mentre s'estava desant automàticament aquest document.",
    correctInvalidFields: 'Si us plau, corregeix els camps no vàlids.',
    deletingFile: "Hi ha hagut un error en eliminar l'arxiu.",
    deletingTitle:
      "Hi ha hagut un error mentre s'eliminava {{title}}. Si us plau, comprova la teva connexió i torna-ho a intentar.",
    emailOrPasswordIncorrect:
      'El correu electrònic o la contrasenya proporcionats no són correctes.',
    followingFieldsInvalid_one: 'El següent camp no és vàlid:',
    followingFieldsInvalid_other: 'Els següents camps no són vàlids:',
    incorrectCollection: 'Col·lecció incorrecta',
    invalidFileType: "Tipus d'arxiu no vàlid",
    invalidFileTypeValue: "Tipus d'arxiu no vàlid: {{value}}",
    invalidRequestArgs: 'Arguments no vàlids en la sol·licitud: {{args}}',
    loadingDocument: "Hi ha hagut un problema carregant el document amb l'ID {{id}}.",
    localesNotSaved_one: "No s'ha pogut desar el següent idioma:",
    localesNotSaved_other: "No s'han pogut desar els següents idiomes:",
    logoutFailed: 'La desconnexió ha fallat.',
    missingEmail: 'Falta el correu electrònic.',
    missingIDOfDocument: "Falta l'ID del document a actualitzar.",
    missingIDOfVersion: "Falta l'ID de la versió.",
    missingRequiredData: 'Falten dades necessàries.',
    noFilesUploaded: "No s'ha carregat cap arxiu.",
    noMatchedField: 'No s\'ha trobat cap camp coincident per a "{{label}}"',
    notAllowedToAccessPage: 'No tens permís per accedir a aquesta pàgina.',
    notAllowedToPerformAction: 'No tens permís per dur a terme aquesta acció.',
    notFound: "El recurs sol·licitat no s'ha trobat.",
    noUser: 'Cap usuari',
    previewing: 'Hi ha hagut un problema en previsualitzar aquest document.',
    problemUploadingFile: "Hi ha hagut un problema mentre es carregava l'arxiu.",
    tokenInvalidOrExpired: 'El token és invàlid o ha caducat.',
    tokenNotProvided: "No s'ha proporcionat cap token.",
    unableToDeleteCount: "No s'han pogut eliminar {{count}} de {{total}} {{label}}.",
    unableToReindexCollection:
      'Error al reindexar la col·lecció {{collection}}. Operació cancel·lada.',
    unableToUpdateCount: "No s'han pogut actualitzar {{count}} de {{total}} {{label}}.",
    unauthorized: "No autoritzat, has d'iniciar sessió per fer aquesta sol·licitud.",
    unauthorizedAdmin: "No autoritzat, aquest usuari no té accés al panell d'administració.",
    unknown: "S'ha produït un error desconegut.",
    unPublishingDocument: 'Hi ha hagut un problema mentre es despublicava aquest document.',
    unspecific: "S'ha produït un error.",
    userEmailAlreadyRegistered: 'Ja hi ha un usuari registrat amb aquest correu electrònic.',
    userLocked: "Aquest usuari està bloquejat per massa intents fallits d'inici de sessió.",
    usernameAlreadyRegistered: "Ja hi ha un usuari registrat amb aquest nom d'usuari.",
    usernameOrPasswordIncorrect: "El nom d'usuari o la contrasenya proporcionats no són correctes.",
    valueMustBeUnique: 'El valor ha de ser únic.',
    verificationTokenInvalid: 'El token de verificació és invàlid.',
  },
  fields: {
    addLabel: 'Afegeix {{label}}',
    addLink: 'Afegeix enllaç',
    addNew: 'Afegeix nou',
    addNewLabel: 'Afegeix nou {{label}}',
    addRelationship: 'Afegeix relació',
    addUpload: 'Afegeix pujada',
    block: 'bloc',
    blocks: 'blocs',
    blockType: 'Tipus de bloc',
    chooseBetweenCustomTextOrDocument:
      'Tria entre introduir una URL de text personalitzada o enllaçar a un altre document.',
    chooseDocumentToLink: 'Tria un document per enllaçar',
    chooseFromExisting: 'Tria d’entre els existents',
    chooseLabel: 'Tria {{label}}',
    collapseAll: 'Col·lapsa-ho tot',
    customURL: 'URL personalitzada',
    editLabelData: 'Edita les dades de {{label}}',
    editLink: 'Edita l’enllaç',
    editRelationship: 'Edita la relació',
    enterURL: 'Introdueix una URL',
    internalLink: 'Enllaç intern',
    itemsAndMore: '{{items}} i {{count}} més',
    labelRelationship: 'Relació de {{label}}',
    latitude: 'Latitud',
    linkedTo: 'Enllaçat a <0>{{label}}</0>',
    linkType: 'Tipus d’enllaç',
    longitude: 'Longitud',
    newLabel: 'Nou {{label}}',
    openInNewTab: 'Obre en una nova pestanya',
    passwordsDoNotMatch: 'Les contrasenyes no coincideixen.',
    relatedDocument: 'Document relacionat',
    relationTo: 'Relació amb',
    removeRelationship: 'Elimina la relació',
    removeUpload: 'Elimina la pujada',
    saveChanges: 'Desa els canvis',
    searchForBlock: 'Cerca un bloc',
    selectExistingLabel: 'Selecciona un {{label}} existent',
    selectFieldsToEdit: 'Selecciona camps per editar',
    showAll: 'Mostra-ho tot',
    swapRelationship: 'Intercanvia la relació',
    swapUpload: 'Intercanvia la pujada',
    textToDisplay: 'Text a mostrar',
    toggleBlock: 'Alterna el bloc',
    uploadNewLabel: 'Puja un nou {{label}}',
  },
  general: {
    aboutToDelete: 'Estas apunt de eliminar {{label}} <1>{{title}}</1>. Estas segur?',
    aboutToDeleteCount_many: 'Estas apunt de eliminar {{count}} {{label}}',
    aboutToDeleteCount_one: 'Estas apunt de eliminar {{count}} {{label}}',
    aboutToDeleteCount_other: 'Estas apunt de eliminar {{count}} {{label}}',
    addBelow: 'Afegeix a sota',
    addFilter: 'Afegeix filtre',
    adminTheme: "Tema d'administració",
    all: 'Tots',
    allCollections: 'Totes les col·leccions',
    and: 'i',
    anotherUser: 'Altre usuari',
    anotherUserTakenOver: "Un altre usuari ha pres la edició d'aquest document.",
    applyChanges: 'Apica els canvis',
    ascending: 'Ascendent',
    automatic: 'Automàtic',
    backToDashboard: 'Torna al tauler',
    cancel: 'Cancel·la',
    changesNotSaved: 'El teu document té canvis no desats. Si continues, els canvis es perdran.',
    clearAll: 'Esborra-ho tot',
    close: 'Tanca',
    collapse: 'Replegar',
    collections: 'Collections',
    columns: 'Columnes',
    columnToSort: 'Columna per ordenar',
    confirm: 'Confirma',
    confirmCopy: 'Confirmar còpia',
    confirmDeletion: "Confirma l'eliminació",
    confirmDuplication: 'Confirma duplicacat',
    confirmReindex: 'Reindexa {{collections}}?',
    confirmReindexAll: 'Reindexa totes les collections?',
    confirmReindexDescription:
      'Aixo eliminarà els índexs existents i reindexarà els documents de les col·leccions {{collections}}.',
    confirmReindexDescriptionAll:
      'Aixo eliminarà els índexs existents i reindexarà els documents de totes les col·leccions.',
    copied: 'Copiat',
    copy: 'Copiar',
    copying: 'Copiant',
    copyWarning:
      'Estas a punt de sobreescriure {{to}} amb {{from}} per {{label}} {{title}}. Estas segur?',
    create: 'Crear',
    created: 'Creat',
    createdAt: 'Creat el',
    createNew: 'Crear nou',
    createNewLabel: 'Crea nou {{label}}',
    creating: 'Creant',
    creatingNewLabel: 'Creant nou {{label}}',
    currentlyEditing:
      'esta editant actualment aquest document. Si prens el control, es bloquejarà per continuar editant i potser perdrà els canvis no desats.',
    custom: 'Personalitzat',
    dark: 'Fosc',
    dashboard: 'Tauler',
    delete: 'Eliminar',
    deletedCountSuccessfully: 'Eliminat {{count}} {{label}} correctament.',
    deletedSuccessfully: 'Eliminat correntament.',
    deleting: 'Eliminant...',
    depth: 'Profunditat',
    descending: 'Descendent',
    deselectAllRows: 'Deselecciona totes les files',
    document: 'Document',
    documentLocked: 'Document bloquejat',
    documents: 'Documents',
    duplicate: 'Duplicar',
    duplicateWithoutSaving: 'Duplica sense desar',
    edit: 'Edita',
    editAll: 'Edita-ho tot',
    editedSince: 'Editat des de',
    editing: 'Editant',
    editingLabel_many: 'Editent {{count}} {{label}}',
    editingLabel_one: 'Editent {{count}} {{label}}',
    editingLabel_other: 'Editant {{count}} {{label}}',
    editingTakenOver: 'Edició presa',
    editLabel: 'Edita {{label}}',
    email: 'correu electrònic',
    emailAddress: 'Addressa de correu electrònic',
    enterAValue: 'Introdueix un valor',
    error: 'Error',
    errors: 'Errors',
    fallbackToDefaultLocale: 'Torna al idioma per defecte',
    false: 'Fals',
    filter: 'Filtra',
    filters: 'Filtres',
    filterWhere: 'Filtra {{label}} on',
    globals: 'Globals',
    goBack: 'Torna enrere',
    isEditing: 'esta editant',
    language: 'Idioma',
    lastModified: 'Última modificació',
    leaveAnyway: 'Deixa-ho de totes maneres',
    leaveWithoutSaving: 'Deixa sense desar',
    light: 'Clar',
    livePreview: 'Previsualització en viu',
    loading: 'Carregant',
    locale: 'Idioma',
    locales: 'Idiomes',
    menu: 'Menu',
    moveDown: 'Mou avall',
    moveUp: 'Move amunt',
    newPassword: 'Nova contrasenya',
    next: 'Seguent',
    noDateSelected: 'Data not seleccionada',
    noFiltersSet: 'Sense filtres',
    noLabel: '<No {{label}}>',
    none: 'Cap',
    noOptions: 'Sense opcions',
    noResults:
      "No s'ha trobat cap {{label}}. O no n'hi ha cap encara o cap coincideix amb els filtres que has especificat anteriorment.",
    notFound: 'No trobat',
    nothingFound: 'Res trobat',
    noUpcomingEventsScheduled: 'No hi ha esdeveniments programats.',
    noValue: 'No hi ha cap valor',
    of: 'de',
    only: 'Nomes',
    open: 'Obert',
    or: 'O',
    order: 'Ordre',
    overwriteExistingData: 'Sobreescriu les dades existents',
    pageNotFound: 'Pàgina no trobada',
    password: 'Contrasenya',
    payloadSettings: 'configuracio Payload',
    perPage: 'Per pagian: {{limit}}',
    previous: 'Previ',
    reindex: 'Reindexa',
    reindexingAll: 'Reindexa tots el {{collections}}.',
    remove: 'Elimina',
    reset: 'Restableix',
    resetPreferences: 'Restablir les preferències',
    resetPreferencesDescription:
      'Això restablirà totes les teves preferències a les configuracions per defecte.',
    resettingPreferences: 'Restablint les preferències.',
    row: 'Fila',
    rows: 'Files',
    save: 'Desa',
    saving: 'Desant...',
    schedulePublishFor: 'Programa la publicacio {{title}}',
    searchBy: 'Cerca per {{label}}',
    selectAll: 'Selecciona totes les {{count}} {{label}}',
    selectAllRows: 'Selecciona totes les files',
    selectedCount: '{{count}} {{label}} seleccionats',
    selectValue: 'Selecciona un valor',
    showAllLabel: 'Mostra totes {{label}}',
    sorryNotFound: "Ho sento, no s'ha trobat la pàgina que busques.",
    sort: 'Ordena',
    sortByLabelDirection: 'Ordena per {{label}} {{direction}}',
    stayOnThisPage: 'Permaneix en aquesta pàgina',
    submissionSuccessful: 'Enviament exitós',
    submit: 'Envia',
    submitting: 'Enviant...',
    success: 'Èxit',
    successfullyCreated: '{{label}} creada correctament.',
    successfullyDuplicated: '{{label}} duplicada correctament.',
    successfullyReindexed:
      'Reindexació correcta de {{count}} de {{total}} documents de {{collections}}',
    takeOver: 'Prendre el control',
    thisLanguage: 'Catala',
    time: 'Temps',
    titleDeleted: '{{label}} "{{title}}" eliminat correctament.',
    true: 'Veritat',
    unauthorized: 'No autoritzat',
    unsavedChanges: 'Tens canvis no desats. Vols continuar sense desar?',
    unsavedChangesDuplicate: 'Tens canvis no desats. Vols duplicar sense desar?',
    untitled: 'Sense titol',
    upcomingEvents: 'Esdeveniments programats',
    updatedAt: 'Actualitzat el',
    updatedCountSuccessfully: 'Actualitzat {{count}} {{label}} correctament.',
    updatedSuccessfully: 'Actualitzat amb exit.',
    updating: 'Actualitzant',
    uploading: 'Pujant',
    uploadingBulk: 'Pujant {{current}} de {{total}}',
    user: 'Usuari',
    username: "Nom d'usuari",
    users: 'Usuaris',
    value: 'Valor',
    viewReadOnly: 'Veure només de lectura',
    welcome: 'Benvingut',
  },
  localization: {
    cannotCopySameLocale: 'No es pot copiar al mateix idioma',
    copyFrom: 'Copiar de',
    copyFromTo: 'Copiant de {{from}} a {{to}}',
    copyTo: 'Copiar a',
    copyToLocale: 'Copiar a idioma',
    localeToPublish: 'Idioma per publicar',
    selectLocaleToCopy: "Selecciona l'idioma per copiar",
  },
  operators: {
    contains: 'conté',
    equals: 'és igual a',
    exists: 'existeix',
    intersects: 'interseca',
    isGreaterThan: 'és més gran que',
    isGreaterThanOrEqualTo: 'és més gran o igual a',
    isIn: 'està en',
    isLessThan: 'és menor que',
    isLessThanOrEqualTo: 'és menor o igual a',
    isLike: 'és semblant a',
    isNotEqualTo: 'no és igual a',
    isNotIn: 'no està en',
    near: 'a prop de',
    within: 'dins de',
  },
  upload: {
    addFile: 'Afegir fitxer',
    addFiles: 'Afegir fitxers',
    bulkUpload: 'Carregar arxius massius',
    crop: 'Retallar',
    cropToolDescription:
      'Arrossega les cantonades de l’àrea seleccionada, dibuixa una nova àrea o ajusta els valors a continuació.',
    dragAndDrop: 'Arrossega i deixa anar un fitxer',
    dragAndDropHere: 'o arrossega i deixa anar un fitxer aquí',
    editImage: 'Editar imatge',
    fileName: 'Nom del fitxer',
    fileSize: 'Mida del fitxer',
    filesToUpload: 'Fitxers a carregar',
    fileToUpload: 'Fitxer a carregar',
    focalPoint: 'Punt focal',
    focalPointDescription:
      'Arrossega el punt focal directament sobre la vista prèvia o ajusta els valors a continuació.',
    height: 'Alçada',
    lessInfo: 'Menys informació',
    moreInfo: 'Més informació',
    pasteURL: "Enganxa l'URL",
    previewSizes: 'Mides de la vista prèvia',
    selectCollectionToBrowse: 'Selecciona una col·lecció per explorar',
    selectFile: 'Selecciona un fitxer',
    setCropArea: "Estableix l'àrea de retall",
    setFocalPoint: 'Estableix el punt focal',
    sizes: 'Mides',
    sizesFor: 'Mides per a {{label}}',
    width: 'Amplada',
  },
  validation: {
    emailAddress: 'Si us plau, introdueix una adreça de correu electrònic vàlida.',
    enterNumber: 'Si us plau, introdueix un número vàlid.',
    fieldHasNo: 'Aquest camp no té {{label}}',
    greaterThanMax: '{{value}} és més gran que el màxim permès {{label}} de {{max}}.',
    invalidInput: 'Aquest camp té una entrada invàlida.',
    invalidSelection: 'Aquest camp té una selecció invàlida.',
    invalidSelections: 'Aquest camp té les següents seleccions invàlides:',
    lessThanMin: '{{value}} és menor que el mínim permès {{label}} de {{min}}.',
    limitReached: "S'ha arribat al límit, només es poden afegir {{max}} elements.",
    longerThanMin:
      'Aquest valor ha de ser més llarg que la longitud mínima de {{minLength}} caràcters.',
    notValidDate: '"{{value}}" no és una data vàlida.',
    required: 'Aquest camp és obligatori.',
    requiresAtLeast: 'Aquest camp requereix almenys {{count}} {{label}}.',
    requiresNoMoreThan: 'Aquest camp requereix com a màxim {{count}} {{label}}.',
    requiresTwoNumbers: 'Aquest camp requereix dos números.',
    shorterThanMax:
      'Aquest valor ha de ser més curt que la longitud màxima de {{maxLength}} caràcters.',
    trueOrFalse: 'Aquest camp només pot ser igual a true o false.',
    username:
      "Si us plau, introdueix un nom d'usuari vàlid. Pot contenir lletres, números, guions, punts i guions baixos.",
    validUploadID: 'Aquest camp no és un ID de càrrega vàlid.',
  },
  version: {
    type: 'Tipus',
    aboutToPublishSelection:
      'Estàs a punt de publicar tots els {{label}} de la selecció. Estàs segur?',
    aboutToRestore:
      "Estàs a punt de restaurar aquest document {{label}} a l'estat en què es trobava el {{versionDate}}.",
    aboutToRestoreGlobal:
      "Estàs a punt de restaurar el {{label}} global a l'estat en què es trobava el {{versionDate}}.",
    aboutToRevertToPublished:
      "Estàs a punt de revertir els canvis d'aquest document a l'estat publicat. Estàs segur?",
    aboutToUnpublish: 'Estàs a punt de despublicar aquest document. Estàs segur?',
    aboutToUnpublishSelection:
      'Estàs a punt de despublicar tots els {{label}} de la selecció. Estàs segur?',
    autosave: 'Desa automàticament',
    autosavedSuccessfully: 'Desat automàticament amb èxit.',
    autosavedVersion: 'Versió desada automàticament',
    changed: 'Canviat',
    changedFieldsCount_one: '{{count}} camp canviat',
    changedFieldsCount_other: '{{count}} camps modificats',
    compareVersion: 'Comparar versió amb:',
    confirmPublish: 'Confirmar publicació',
    confirmRevertToSaved: 'Confirmar revertir a desat',
    confirmUnpublish: 'Confirmar despublicació',
    confirmVersionRestoration: 'Confirmar restauració de versió',
    currentDocumentStatus: 'Estat actual del document {{docStatus}}',
    currentDraft: 'Borrador actual',
    currentPublishedVersion: 'Versió publicada actual',
    draft: 'Borrador',
    draftSavedSuccessfully: 'Borrador desat amb èxit.',
    lastSavedAgo: 'Últim desament fa {{distance}}',
    noFurtherVersionsFound: "No s'han trobat més versions",
    noRowsFound: "No s'han trobat {{label}}",
    noRowsSelected: "No s'han seleccionat {{label}}",
    preview: 'Vista prèvia',
    previouslyPublished: 'Publicat anteriorment',
    problemRestoringVersion: 'Hi ha hagut un problema en restaurar aquesta versió',
    publish: 'Publicar',
    publishAllLocales: 'Publica totes les configuracions regionals',
    publishChanges: 'Publicar canvis',
    published: 'Publicat',
    publishIn: 'Publicar en {{locale}}',
    publishing: 'Publicant',
    restoreAsDraft: 'Restaurar com a borrador',
    restoredSuccessfully: 'Restaurat amb èxit.',
    restoreThisVersion: 'Restaurar aquesta versió',
    restoring: 'Restaurant...',
    reverting: 'Revertint...',
    revertToPublished: 'Revertir a publicat',
    saveDraft: 'Desar borrador',
    scheduledSuccessfully: 'Programat amb èxit.',
    schedulePublish: 'Programar publicació',
    selectLocales: 'Selecciona els idiomes per mostrar',
    selectVersionToCompare: 'Selecciona una versió per comparar',
    showingVersionsFor: 'Mostrant versions per a:',
    showLocales: 'Mostrar idiomes:',
    status: 'Estat',
    unpublish: 'Despublicar',
    unpublishing: 'Despublicant...',
    version: 'Versió',
    versionCount_many: '{{count}} versions trobades',
    versionCount_none: "No s'han trobat versions",
    versionCount_one: '{{count}} versió trobada',
    versionCount_other: '{{count}} versions trobades',
    versionCreatedOn: '{{version}} creada el:',
    versionID: 'ID de versió',
    versions: 'Versions',
    viewingVersion: 'Veient versió per al {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Veient versió per al {{entityLabel}} global',
    viewingVersions: 'Veient versions per al {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Veient versions per al {{entityLabel}} global',
  },
}

export const ca: Language = {
  dateFNSKey: 'ca',
  translations: caTranslations,
}
