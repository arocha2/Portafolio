export const useCopy = () => {
  const copyClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    copyClipboard,
  };
};
