import Image from "next/image";
import profileImg from "@/assets/profile.png";
import camIcon from "@/assets/camicon.svg";

export function AccountSettingsScreen() {
  return (
    <div className="flex flex-col flex-1 bg-app-bg">
      {/* Header */}
      <div className="px-6 py-5 border-b border-app-border">
        <h1 className="text-input-label font-medium text-app-text font-rubik">
          Account Settings
        </h1>
      </div>

      {/* Profile section */}
      <div className="px-6 pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <Image
              src={profileImg}
              alt="Profile photo"
              width={72}
              height={72}
              className="rounded-full object-cover w-[72px] h-[72px]"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand flex items-center justify-center">
              <Image
                src={camIcon}
                alt="Change photo"
                width={14}
                height={14}
              />
            </div>
          </div>

          <div>
            <p className="text-input-label font-medium text-app-text font-rubik">
              Marry Doe
            </p>
            <p className="text-small text-app-text font-rubik mt-0.5">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="text-input-label text-app-text font-rubik leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
