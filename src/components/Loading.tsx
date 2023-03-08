import s from "@/styles/Loading.module.css";

export function Loading() {
  return (
    <div className={s.isLoading}>
      <img src="/2.svg" alt="loading" />
    </div>
  );
}
