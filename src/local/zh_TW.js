exports.local = "Chinese; 中文; TW (Taiwan)";

exports.rules = {
    digits: [/^\d+$/, "請輸入數字"],
    letters: [/^[a-z]+$/i, "請輸入字母"],
    date: [/^\d{4}-\d{1,2}-\d{1,2}$/, "請輸入有效的日期，格式:yyyy-mm-dd"],
    time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, "請輸入有效的時間，00:00到23:59之間"],
    email:[/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, '請輸入有效的電郵'],
    url: [/^(https?|s?ftp):\/\/\S+$/i, "請輸入有效的網址"],
    //可接受的後綴名，例如：accept(png|jpg|bmp|gif);
    accept: function(element, params){
        if (!params) return true;
        var ext = params[0];
        return (ext === '*') ||
               (new RegExp(".(?:" + ext + ")$", "i")).test(element.value) ||
               this.renderMsg("只接受{1}後綴的文件", ext.replace(/\|/g, ','));
    }
};

exports.lang = {
    defaultMsg: "{0}格式不正確",
    loadingMsg: "正在驗證...",

    error: "網絡異常",
    timeout: "請求超時",

    required: "{0}不能為空",
    remote: "{0}已被使用",

    integer_nzp: "請輸入整數",
    integer_p: "請輸入正整數",
    integer_pz: "請輸入正整數或0",
    integer_n: "請輸入負整數",
    integer_nz: "請輸入負整數或0",

    match_eq: "{0}與{1}不一致",
    match_neq: "{0}與{1}不能相同",
    match_lt: "{0}必須小於{1}",
    match_gt: "{0}必須大於{1}",
    match_lte: "{0}必須小於或等於{1}",
    match_gte: "{0}必須大於或等於{1}",

    range_rg: "請輸入{1}到{2}的數",
    range_gte: "請輸入大於或等於{1}的數",
    range_lte: "請輸入小於或等於{1}的數",
    
    checked_eq: "請選擇{1}項",
    checked_rg: "請選擇{1}到{2}項",
    checked_gte: "請至少選擇{1}項",
    checked_lte: "請最多選擇{1}項",

    length_eq: "請輸入{1}個字符",
    length_rg: "請輸入{1}到{2}個字符",
    length_gte: "請至少輸入{1}個字符",
    length_lte: "請最多輸入{1}個字符",
    length_eq_2: "",
    length_rg_2: "",
    length_gte_2: "",
    length_lte_2: ""
};
