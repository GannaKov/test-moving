import ButtonExmp from '../components/ui/buttonExmp';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="mb-2">ПРИВІТ</h1>
        <h2 className="mb-2">У нас є два чудові дизайни</h2>
        <h3 className="mb-2">Зараз ми виберемо для тебе</h3>
        <p className="mb-2 text-xl">
          Але потім ти обов&apos;язково натисніть на таку кнопку 👉{' '}
          <span className="h-10 w-20 border border-slate-800">
            Зразок кнопки
          </span>
        </p>
        <p className="text-l mb-2">І подивися нашу іншу версію</p>
        <ButtonExmp>Click me</ButtonExmp>
      </div>
    </div>
  );
}
