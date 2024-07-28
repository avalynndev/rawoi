"use client";
import axios from "axios";
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import AnimeCard from "@/components/card";
import { CONSUMET_URL } from "@/config";

interface Anime {
  id: number;
  title: string;
}

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topAiring, setTopAiring] = useState<Anime[]>([]);
  const [popular, setPopular] = useState<Anime[]>([]);

  const fetchTopAiring = async () => {
    try {
      const response = await axios.get(CONSUMET_URL + "/top-airing");
      setTopAiring(response.data.results);
    } catch (error) {
      console.log("Error fetching top airing anime");
    }
  };

  const fetchPopular = async () => {
    try {
      const response = await axios.get(CONSUMET_URL + "/popular");
      setPopular(response.data.results);
    } catch (error) {
      console.log("Error fetching popular anime");
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      await Promise.all([fetchTopAiring(), fetchPopular()]);
      setIsLoading(false);
    };
    fetchDetails();
  }, []);

  return (
    <section className=" items-center">
      <div className="max-w-7xl text-center max-w mx-auto px-6 pb-3">
        <h2 className="text-4xl font-bold mb-4 py-4 font-mono">TOP AIRING</h2>
        {isLoading ? (
          <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {Array.from({ length: 14 }, (_, index) => (
              <Card
                className="border-none bg-none flex flex-col justify-center items-center"
                key={index}
              >
                <CardBody className="overflow-visible py-2">
                  <Skeleton className="rounded-md object-cover rounded-xl h-[230px] w-[140px]" />
                </CardBody>
                <div className="overflow-visible pb-2">
                  <Skeleton className="rounded-md object-cover rounded-xl h-[15px] w-[140px]" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {topAiring.map((anime: any) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
        <h2 className="text-4xl font-bold mb-4 py-4 font-mono">POPULAR</h2>
        {isLoading ? (
          <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {Array.from({ length: 21 }, (_, index) => (
              <Card
                className="border-none bg-none flex flex-col justify-center items-center"
                key={index}
              >
                <CardBody className="overflow-visible py-2">
                  <Skeleton className="rounded-md object-cover rounded-xl h-[230px] w-[140px]" />
                </CardBody>
                <div className="overflow-visible pb-2">
                  <Skeleton className="rounded-md object-cover rounded-xl h-[15px] w-[140px]" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {popular.map((anime: any) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;
