// Получение курса валют
export default defineEventHandler(async (event) => {

  const { currencyKey } = useRuntimeConfig()

  let { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  // If data empty
  if (!data) {
    data = {
      RUB: { code: "RUB", value: 69.675095 },
      EUR: { code: 'EUR', value: 0.931222 }
    };
  }

  return data;
});
