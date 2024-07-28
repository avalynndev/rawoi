"use client";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import {
  Card,
  CardFooter,
  CardBody,
  Skeleton,
  Spinner,
} from "@nextui-org/react";
import { CONSUMET_URL } from "@/config";
import AnimeCard from "@/components/card";
import axios from "axios";
import Image from "next/image";

const Search = ({ params }: any) => {
  const { text } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [search_results, setSearchResults] = useState<any[]>([]);

  const fetchDetails = useCallback(async () => {
    try {
      const search = await axios.get(CONSUMET_URL + "/" + text);
      setSearchResults(search.data.results);
    } catch (error) {
      console.error("Error fetching details:", error);
    } finally {
      setIsLoading(false);
    }
  }, [text]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);
  return (
    <div className="max-w-7xl text-center max-w mx-auto px-6 pb-3">
      {isLoading ? (
        <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {Array.from({ length: 20 }, (_, index) => (
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
        <div>
          {search_results.length === 0 ? (
            <div className="flex flex-col text-center items-center justify-center h-screen">
              <div className="text-4xl font-bold mb-4">No Results Found</div>
              <div className="text-gray-500 ">
                Try adjusting your search criteria or check your spelling.
              </div>
            </div>
          ) : (
            <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {search_results.map((anime: any) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
