const axiosBaseQuery  = async (args, api, extraOptions) => {
    let result = await axiosBaseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // حاول تجديد التوكن باستخدام refresh token
        const refreshResult = await axiosBaseQuery(
            { url: "/auth/refresh", method: "POST" },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            // إذا تم التجديد، أعد تنفيذ الطلب الأصلي
            result = await axiosBaseQuery(args, api, extraOptions);
        } else {
            // إعادة توجيه المستخدم لتسجيل الدخول
            console.error("Session expired. Redirecting to login...");
        }
    }

    return result;
};

export default axiosBaseQuery ;
