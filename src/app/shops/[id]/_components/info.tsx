import { CallIcon } from "@/components/icons/call-icon";
import { MapPin } from "@/components/icons/map-pin";
import { RatingIcon } from "@/components/icons/rating-icon";
import { TimeIcon } from "@/components/icons/time-icon";
import { Card } from "@/components/ui/card";

type Props = {
  address: string;
  distance: number;
  contact: string;
  rating: number;
  review: number;
};

export const ShopInfo = (props: Props) => {
  const { address, distance, contact, rating, review } = props;

  return (
    <Card className="flex flex-col md:flex-row p-5 gap-5.5 rounded-[18px]">
      <div className="flex flex-row gap-3 flex-1">
        <div className="bg-brand-400 size-9.5 flex items-center justify-center rounded-[10px]">
          <MapPin />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-text-secondary">Адрес</label>
          <p className="font-semibold text-[14px]">{address}</p>
          <label className="text-text-brand">{distance} м от вас</label>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-1">
        <div className="bg-brand-400 size-9.5 flex items-center justify-center rounded-[10px]">
          <TimeIcon size={18} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-text-secondary">Сегодня</label>
          <p className="font-semibold text-[14px]">08:00-21:00</p>
          <label className="text-text-secondary text-[12px]">
            Ежедневно без перерыва
          </label>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-1">
        <div className="bg-brand-400 size-9.5 flex items-center justify-center rounded-[10px]">
          <CallIcon size={18} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-text-secondary">Контакты</label>
          <p className="font-semibold text-[14px]">{contact}</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-1">
        <div className="bg-orange-400 size-9.5 flex items-center justify-center rounded-[10px]">
          <RatingIcon size={18} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-text-secondary">Рейтинг</label>
          <p className="font-semibold text-[14px]">{rating} из 5</p>
          <label className="text-text-secondary text-[12px]">
            {review} отзывов
          </label>
        </div>
      </div>
    </Card>
  );
};
